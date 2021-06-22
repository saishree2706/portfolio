const newYears = '27 June 2021';
const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('min');
const secsE = document.getElementById('sec');

function countdown(){
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();
	const seconds = (newYearsDate - currentDate)/1000;

	const days = Math.floor(seconds/3600/24);
	const hours = Math.floor(seconds/3600)%24;
	const minutes = Math.floor(seconds/60)%60;
	const sec = Math.floor(seconds)%60;

	daysE.innerHTML = days;
	hoursE.innerHTML = formatTime(hours);
	minsE.innerHTML = formatTime(minutes);
	secsE.innerHTML = formatTime(sec);
}

function formatTime(time){
	return time<10?(`0${time}`):time;
}




countdown();

setInterval(countdown, 1000);

