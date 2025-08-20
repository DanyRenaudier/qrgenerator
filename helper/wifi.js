import { toCanvas } from "./qrgenerator";

class WIFI {
  constructor() {
    this.ssid = document.getElementById("ssid");
    this.security_protocol = document.getElementById("security_protocol");
    this.password = document.getElementById("password");
    this.wifi = document.getElementById("wifi");
    this.btn = document.getElementById("b-wifi");
    this.eye = document.getElementById("eye");

    //methods
    this.init();
  }

  init() {
    this.validation();
    this.hidePassword();
  }

  validation() {
    this.btn.addEventListener("click", () => {
      [ssid.value, security_protocol.value, password.value].includes("")
        ? alert("Complete todos los campos")
        : toCanvas(
            this.wifi,
            `WIFI:T:${security_protocol.value != "WEP" ? "WPA" : "WEP"};S:${ssid.value};P:${password.value};;`,
            (wifi.style.display = "block"),
          );
    });
  }

  hidePassword() {
    this.eye.addEventListener("mouseover", () => {
      password.type = "text";
    });
    this.eye.addEventListener("mouseleave", () => {
      password.type = "password";
    });
  }
}

export { WIFI };
