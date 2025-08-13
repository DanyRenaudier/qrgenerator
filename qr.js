import QRCode from 'qrcode'

const ssid= document.getElementById('ssid')
const security_protocol= document.getElementById('security_protocol')
const password= document.getElementById('password')


const generateQR = async (x) => {
    try {
        const code= await QRCode.toCanvas(canvas, x)
        return code
    } catch (err) {
        console.error(err)
    }
}

const toCanvas= async(x)=>{
    const canvas=document.getElementById('canvas')
    try {
        
        const qr = await generateQR(x)
        console.log(qr)
    } catch (error) {
        throw error
    }
}

document.getElementById('generate').addEventListener('click',()=>{
    const tocode=`WIFI:T:${security_protocol.value != 'WEP' ? 'WPA':'WPA'};S:${ssid.value};P:${password.value};;`
    console.log(tocode)
    toCanvas(tocode)
})