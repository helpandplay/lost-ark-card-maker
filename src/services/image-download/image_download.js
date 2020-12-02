import { toPng } from "html-to-image";
import download from "downloadjs";

class ImageDownload {
  download(element) {
    toPng(element).then(function (dataUrl) {
      download(dataUrl, "card.png");
    });
  }
}
export default ImageDownload;
