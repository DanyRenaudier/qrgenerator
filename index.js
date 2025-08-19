import { tabFormat } from "./helper/tabs";
import { URL } from "./helper/url";
import { wifi } from "./helper/wifi";

document.querySelectorAll("canvas").forEach((canvas) => {
  canvas.style.display = "none";
});

tabFormat();
wifi();
URL();
