const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const LenEl = document.getElementById('Len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*_+=-';


function getLower(){
	return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}


function getUpper(){
	return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumber(){
	return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
	return symbols[Math.floor(Math.random()*symbols.length)];
}




function generatePassword(){

	const len = LenEl.value;
	let password = '';

	if(upperEl.checked){
		password+=getUpper();
	}

	if(lowerEl.checked){
		password+=getLower();
	}

	if(numberEl.checked){
		password+=getNumber();
	}

	if(symbolEl.checked){
		password+=getSymbol();
	}

	for(let i=password.length-1;i<len;i++){
		const x =generateX();
		password += x;
	}

	pwEl.innerText = password;
}

function generateX(){
	const xs = [];
	if(upperEl.checked){
		xs.push(getUpper());
	}

	if(lowerEl.checked){
		xs.push(getLower());
	}

	if(numberEl.checked){
		xs.push(getNumber());
	}

	if(symbolEl.checked){
		xs.push(getSymbol());
	}

	if(xs.length === 0) return "";

	return xs[Math.floor(Math.random()*xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', ()=>{

	const textarea = document.createElement("textarea");
	const password = pwEl.innerText;

	if(!password){
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Copied to clipboard");

});


