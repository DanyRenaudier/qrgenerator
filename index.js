import { tabFormat } from "./helper/tabs";
import { URL } from "./helper/url";
import { WIFI } from "./helper/wifi";

document.querySelectorAll("canvas").forEach((canvas) => {
  canvas.style.display = "none";
});

tabFormat();
const Wifi = new WIFI();

URL();
