import { toCanvas } from "qrcode";

const URL = () => {
  const canvas = document.getElementById("url");

  document.getElementById("b-url").addEventListener("click", () => {
    const url = document.getElementById("txt-url").value;
    toCanvas(canvas, url);
  });
};

export { URL };
