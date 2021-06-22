
let breakLength = document.getElementById('break-length');
let sessionLength = document.getElementById('session-length');
		

function incrementBreak(){
	if(parseFloat(breakLength.innerText)<60){
		breakLength.innerText = parseFloat(breakLength.innerText)+1;
	}
}


function decrementBreak(){
	if(parseFloat(breakLength.innerText)>0){
		breakLength.innerText = parseFloat(breakLength.innerText)-1;
	}
	

}

function incrementSession(){
	if(parseFloat(sessionLength.innerText)<60){
		let incrementSessionValue = parseFloat(sessionLength.innerText)+1;
		sessionLength.innerText = incrementSessionValue;
		document.getElementById('min').innerText = incrementSessionValue;
	}
	
}

function decrementSession(){

	if(parseFloat(sessionLength.innerText)>0){
		let decrementSessionValue = parseFloat(sessionLength.innerText)-1;
		sessionLength.innerText = decrementSessionValue;
		document.getElementById('min').innerText = decrementSessionValue;
	}
}


function toggleOnOff(){

}


function resetClock(){
	
}





