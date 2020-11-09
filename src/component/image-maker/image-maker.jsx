import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../services/crop-image/crop_image";
import ImgPopUp from "./img_popup/img_popup";
import Info from "./info/info";
import Controls from "./controls/controls";
import styles from "./image-maker.module.css";
const ImageMaker = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [upimg, setUpImg] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };
  const cancelCroppedImage = useCallback(() => {
    //취소하고 다시 똑같은 이미지를 클릭하면 이벤트가 듣지 않는 이슈 있음.
    setUpImg(null);
  }, [croppedImage]);
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        upimg,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
    setUpImg(null);
  }, []);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };
  return (
    <div className={styles.image_maker}>
      <Info onSelectFile={onSelectFile} />
      {upimg && (
        <section className={styles.crop}>
          <div className={styles.crop_container}>
            <Cropper
              image={upimg}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={onCropChange}
              onZoomChange={onZoomChange}
              onCropComplete={onCropComplete}
            />
          </div>
          <Controls
            onZoom={setZoom}
            onRotation={setRotation}
            showCroppedImage={showCroppedImage}
            cancelCroppedImage={cancelCroppedImage}
          />
        </section>
      )}
      {croppedImage && (
        <div className={styles.popup}>
          <ImgPopUp img={croppedImage} onClose={onClose} />
        </div>
      )}
    </div>
  );
};

export default ImageMaker;
