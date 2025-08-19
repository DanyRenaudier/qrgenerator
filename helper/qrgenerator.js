import QRCode from "qrcode";

const generateQR = async (canvas, str) => {
  try {
    const code = await QRCode.toCanvas(canvas, str);
  } catch (err) {
    console.error(err);
  }
};

const toCanvas = async (canvas, str) => {
  try {
    const qr = await generateQR(canvas, str);
  } catch (error) {
    throw error;
  }
};

export { generateQR, toCanvas };
