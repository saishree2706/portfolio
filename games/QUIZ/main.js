const quizData = [
	{
		question: 'How old are you?',
		a: '10',
		b: '17',
		c: '25',
		d: '35',
		correct: 'b'
	}, {
		question: 'Most used programming language',
		a: 'java',
		b: 'c',
		c: 'python',
		d: 'javascript',
		correct: 'a'
	}, {
		question: 'Father of India',
		a: 'Gandhi',
		b: 'Nehru',
		c: 'Ambedkar',
		d: 'Modi',
		correct: 'a'
	}, {
		question: 'Which college are you',
		a: 'RGUKT',
		b: 'IIT',
		c: 'IIIT',
		d: 'NIT',
		correct: 'a'
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
				quiz.innerHTML = `<h2>Your score:${score}/${quizData.length}</h2> <button onclick="location.reload()">Play Again?</button>`
			}
		}
	
});











