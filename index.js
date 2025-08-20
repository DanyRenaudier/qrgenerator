import { tabFormat } from "./helper/tabs";
import { URL } from "./helper/url";
import { WIFI } from "./helper/wifi";

const Wifi = new WIFI();

document.querySelectorAll("canvas").forEach((canvas) => {
  canvas.style.display = "none";
});

tabFormat();
URL();
