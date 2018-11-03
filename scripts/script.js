
var quizDetails = {
	title: 'Quiz 1',
	description: 'This quiz is really good!',
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
		failureMessage: '',
		successMessage: '',
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
		successMessage: '',
		shouldChooseAllCorrect: true
	}	
]

quizDetails.questions = questions;

function startQuiz(){
	const vm = this;
	vm.quizStarted = true;
	vm.currentQuestionIndex = 0;
	vm.question = vm.quizDetails.questions[0];
}

function checkAnswer(){
	const vm = this;
	
}

function skipQuestion(){
	const vm = this;
	if(vm.currentQuestionIndex < vm.quizDetails.questions.length - 1){
		vm.currentQuestionIndex += 1;
		vm.question = quizDetails.questions[vm.currentQuestionIndex];
	}
}


var app = new Vue({
  el: '#app',
  data: {
    quizDetails,
    quizStarted: false,
    question: null,
    currentQuestionIndex: -1
  },
  methods: {
  	startQuiz,
  	skipQuestion
  }
})