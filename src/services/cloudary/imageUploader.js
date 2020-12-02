class ImageUploader {
  upload(file) {
    const url = "https://api.cloudinary.com/v1_1/jowancloud/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "g0vqpvpe");
    formData.append("secure", true);
    return fetch(url, {
      method: "POST",
      body: formData,
    }).then((response) => {
      return response.json();
    });
  }
}
export default ImageUploader;
