const quizData = [
	{
		question: 'When is world literacy day?',
		a: '18 June',
		b: '18 September',
		c: '8 June',
		d: '8 September',
		correct: 'd'
	}, {
		question: 'Most used programming language',
		a: 'Java',
		b: 'C Language',
		c: 'Python',
		d: 'Javascript',
		correct: 'a'
	}, {
		question: 'What is Full form of IDE?',
		a: 'Integrated Developer Environment',
		b: 'Internal Development Environment',
		c: 'Integrated Development Environment',
		d: 'Internal Developer Environment',
		correct: 'c'
	}, {
		question: 'When does this pandemic ends?',
		a: '1 jan 2021',
		b: '12 december 2020',
		c: 'Never',
		d: 'No Idea',
		correct: 'd'
	}

];


const answersEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('Question');
const quiz = document.getElementById('quiz');

const aId = document.getElementById('aId');
const bId = document.getElementById('bId');
const cId = document.getElementById('cId');
const dId = document.getElementById('dId');
const submit = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
	deSelect();

	const currentQuizData = quizData[currentQuiz];

	questionE1.innerText = currentQuizData.question;
	aId.innerText = currentQuizData.a;
	bId.innerText = currentQuizData.b;
	cId.innerText = currentQuizData.c;
	dId.innerText = currentQuizData.d;


}


function getSelected(){
	
	let answer = undefined;
	answersEls.forEach((answerEl)=>{
		if(answerEl.checked){
			answer = answerEl.id;
		}
	});

	return answer;
}


function deSelect(){
	answersEls.forEach((answerEl)=>{
		answerEl.checked = false;
	});
}



submit.addEventListener('click', ()=>{
	const answer = getSelected();
	
		if(answer){

			if(answer === quizData[currentQuiz].correct){
				score++;

			}


			currentQuiz++;
			if(currentQuiz< quizData.length){
				loadQuiz();

			}else{
				quiz.innerHTML = `<h2>👉Your score:${score}/${quizData.length}</h2> <button onclick="location.reload()">Play Again❓</button><button class="green">Reveal Answers ✔</button>`
			}
		}
	
});











