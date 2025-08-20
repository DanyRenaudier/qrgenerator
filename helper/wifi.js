import { toCanvas } from "./qrgenerator";

class WIFI {
  constructor() {
    const ssid = document.getElementById("ssid");
    const security_protocol = document.getElementById("security_protocol");
    const password = document.getElementById("password");
    const wifi = document.getElementById("wifi");

    this.wifi();
    this.hidePassword();
  }

  wifi() {
    document.getElementById("b-wifi").addEventListener("click", () => {
      [ssid.value, security_protocol.value, password.value].includes("")
        ? alert("Complete todos los campos")
        : toCanvas(
            wifi,
            `WIFI:T:${security_protocol.value != "WEP" ? "WPA" : "WEP"};S:${ssid.value};P:${password.value};;`,
            (wifi.style.display = "block"),
          );
    });
  }

  hidePassword() {
    const eye = document.getElementById("eye");

    eye.addEventListener("mouseover", () => {});
  }
}

export { WIFI };
