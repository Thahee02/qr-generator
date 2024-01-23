const url = document.querySelector('#url')
const btnEl = document.querySelector('#generateBtn')
let qrEl = document.getElementById('qrCode')
let outputEl = document.querySelector('#output')
const downloadBtnEl = document.querySelector('#downloadBtn')

let qrcode = new QRCode(qrEl)

btnEl.addEventListener('click', ()=> {
	generateQR()
	let imgEl = document.querySelector('img')
	console.log(imgEl.src);
})


url.addEventListener('keydown', (e)=>{
	if(e.key == 'Enter'){
		generateQR()
	}
})



function generateQR(){
	if(url.value != ""){
		outputEl.classList.remove('hidden');
        qrcode.makeCode(url.value);
		
    }
	else{
		alert('Please enter the url to convert qr code');
		url.focus();
	}
}


