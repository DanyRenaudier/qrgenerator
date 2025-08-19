import { generateQR, toCanvas } from "./qrgenerator";

const wifi = () => {
  const ssid = document.getElementById("ssid");
  const security_protocol = document.getElementById("security_protocol");
  const password = document.getElementById("password");
  const wifi = document.getElementById("wifi");

  document.getElementById("b-wifi").addEventListener("click", () => {
    const tocode = `WIFI:T:${security_protocol.value != "WEP" ? "WPA" : "WPE"};S:${ssid.value};P:${password.value};;`;
    toCanvas(wifi, tocode);
  });
};

export { wifi };
