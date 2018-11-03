
var quizDetails = {
	title: 'UX Audits Using Heuristic Evaluation',
	description: `Learn how to audit your UX for usability issues with Neilsen's Heuristics, and improve your product's usability.`,
	cta: 'Start Quiz',
	questions: [] // to be referenced with an actual array later on in the code 
}

var questions = [
	{
		question: 'This can be in HTML',
		options: [
			{label: `<b>This is bold</b> <img src="https://dyzz9obi78pm5.cloudfront.net/app/image/id/5b69cdae8e121cdd499ed1da/n/surveygizmo-402x.png">`, correct: false, failureMessage: ''},
			{label: 'Option 2', correct: true, successMessage: ''}
		],
		successMessage: 'This is the reason why you should do this',
	},
	{
		question: 'This is question 2, a multiple answer question',
		options: [
			{label: 'Option 1', correct: false, failureMessage: ''},
			{label: 'Option 2', correct: true, successMessage: ''},
			{label: 'Option 3', correct: true, successMessage: ''}
		],
		multi: true,
		failureMessage: '',
		successMessage: 'This is a success message',
		shouldChooseAllCorrect: true
	}	
]
quizDetails.questions = questions;

function startQuiz(){
	const vm = this;
	vm.quizStatus = 'started';
	vm.showResult = true;
	vm.currentQuestionIndex = 0;
	vm.question = vm.quizDetails.questions[0];
}

function nextQuestion(){
	const vm = this;
	vm.successMessage = '';
	if(vm.currentQuestionIndex < vm.quizDetails.questions.length - 1){
		vm.currentQuestionIndex += 1;
		vm.question = quizDetails.questions[vm.currentQuestionIndex];
	}
	vm.showCheckAnswer = true;
}

function checkAnswer(){
	const vm = this;
	vm.errorMessage = '';
	vm.successMessage = '';
	if(vm.question.options[vm.answer[vm.currentQuestionIndex]].correct){
		vm.successMessage = vm.question.successMessage || 'Your answer was correct';
		vm.showCheckAnswer = false;
	}else{
		console.log('Wrong answer');
		vm.errorMessage = vm.question.errorMessage || 'Your answer was incorrect';
	}
	console.log('Selected option: '+vm.answer[vm.currentQuestionIndex]);
	console.log(vm.answer);
}

function skipQuestion(){
	const vm = this;
	vm.successMessage = vm.errorMessage = '';
	if(vm.currentQuestionIndex < vm.quizDetails.questions.length - 1){
		vm.currentQuestionIndex += 1;
		vm.question = quizDetails.questions[vm.currentQuestionIndex];
	}else{
		vm.showResult();
	}
}

function showResult(){
	alert('Show result');
	vm.quizStatus = 'complete';
}

function hideError(){
	const vm = this;
	vm.errorMessage = '';
}

function hideSuccess(){
	const vm = this;
	vm.successMessage = '';
}

function handleBackButton(){
	alert('You pressed back button');
}


var app = new Vue({
  el: '#app',
  data: {
    quizDetails,
    quizStatus: 'starting',
    question: {},
    currentQuestionIndex: -1,
    answer: [],
    errorMessage: '',
    successMessage: '',
    showCheckAnswer: true,
    quizCompleted: false
  },
  methods: {
  	startQuiz,
  	skipQuestion,
  	checkAnswer,
  	hideError,
  	hideSuccess,
  	nextQuestion,
  	handleBackButton,
  	showResult
  }
})