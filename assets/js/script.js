const url = document.querySelector('#url')
const btnEl = document.querySelector('#generateBtn')
let qrEl = document.getElementById('qrCode')
let outputEl = document.querySelector('#output')
const downloadBtnEl = document.querySelector('#downloadBtn')

let qrcode = new QRCode(qrEl,{
	width: 118,
    height: 118,
})

btnEl.addEventListener('click', ()=> {
	generateQR()
})


url.addEventListener('keydown', (e)=>{
	if(e.key == 'Enter'){
		generateQR()
	}
})

downloadBtnEl.addEventListener('click', ()=>{
	let img = document.querySelector('#qrCode > img');
	let src = img.getAttribute('src')
	if(src != null){
		downloadBtnEl.setAttribute('href', src)
	}
})


function generateQR(){
	if(url.value != ""){
        qrcode.makeCode(url.value);
		
    }
	else{
		alert('Please enter the url to convert qr code');
		url.focus();
	}
}


