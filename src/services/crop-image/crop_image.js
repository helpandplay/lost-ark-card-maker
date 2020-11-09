const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); //crossOrigin에 필요한 것
    image.src = url;
  });
const getRadianAngle = (rotation) => {
  return (rotation * Math.PI) / 180;
};
/*
 * @param {File} image - 이미지 url
 * @param {Object} pixelCrop - react-easy-crop에서 제공하는 오브젝트 (onCropComplete에서 넘어온 것)
 * @param {number} rotation - 사진이 돌아간 각도
 */
export default async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  //캔버스 컨텍스트에 의해 잘리지 않고
  //이미지가 회전 할 수있는 안전한 영역을 허용하기 위해 각 치수를 두 배로 큰 치수로 설정
  canvas.width = safeArea;
  canvas.height = safeArea;

  //캔버스 컨텍스트를 이미지의 중앙 위치로 변환하여 중앙을 중심으로 회전 가능
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  // 켄버스에 회전된 이미지와 저장된 데이터를 그림
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  //캔버스 너비를 원하는 최종 자르기 크기로 설정 - 기존 컨텍스트를 지움.
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  //x, y 자르기 값에 대한 올바른 오프셋으로 생성 된 회전 이미지를 붙여 넣습니다.
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );

  // base64 string으로 canvas 리턴
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, "image/jpeg");
  });
}
