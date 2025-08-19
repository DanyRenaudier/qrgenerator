import { generateQR, toCanvas } from "./qrgenerator";

const wifi = () => {
  document.getElementById("b-wifi").addEventListener("click", () => {
    const ssid = document.getElementById("ssid");
    const security_protocol = document.getElementById("security_protocol");
    const password = document.getElementById("password");
    const wifi = document.getElementById("wifi");

    console.log(ssid.value, security_protocol.value, password.value);

    [ssid.value, security_protocol.value, password.value].includes("")
      ? alert("Complete los campos!")
      : toCanvas(
          wifi,
          `WIFI:T:${security_protocol.value != "WEP" ? "WPA" : "WEP"};S:${ssid.value};P:${password.value};;`,
        );
  });
};

export { wifi };
