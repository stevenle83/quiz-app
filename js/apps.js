$(document).ready(function() { 

	/*---Questions Array---*/

	var questions = [

		{
			question: "The Walking Dead series take place in which state?",
			choices: ["New York", "Idaho", "Georgia", "Texas"],
			questNum: "1.",
			correct: 2,
			fact: ""

		},

		{
			question: "When the zombie apocalypse started, where was Rick?",
			choices: ["in the hospital", "with his family", "in Atlanta", "outside killing zombies"],
			questNum: "2. ",
			correct: 0,
			fact: ""
		},

		{
			question: "Which character chose to stay back at the CDC to die from the facility's explosion",
			choices: ["Merle", "Jim", "Amy", "Jacqui"],
			questNum: "3. ",
			correct: 3,
			fact: ""
		},

		{
			question: "Why did Otis accidentally shoot Carl?",
			choices: ["he thought Carl was a walker", "Carl was annoying", "he was shooting a deer", "Carl was next to a walker"],
			questNum: "4. ",
			correct: 2,
			fact: ""
		},

		{
			question: "Which two characters' deaths were caused by Shane?",
			choices: ["Otis & Randall", "Otis & John", "Dale & Jimmy", "Jimmy & Patricia"],
			questNum: "5. ",
			correct: 0,
			fact: ""
		},

		{
			question: "Who was bitten in the neck at the prison and sacrificed his/her life to save Carol?",
			choices: ["Oscar", "Axel", "Lori", "T-Dog"],
			questNum: "6. ",
			correct: 3,
			fact: ""
		},

		{
			question: "When Rick, Michonne, and Carl returned to Rick's hometown, they ran into an old friend from season one. Who was he?",
			choices: ["Duane", "The Governor", "Morgan", "Shane"],
			questNum: "7. ",
			correct: 2,
			fact: ""
		},

		{
			question: "How did Hershel die?",
			choices: ["he was decapitated", "he was bitten by a walker", "he was shot", "he lost another leg"],
			questNum: "8. ",
			correct: 0,
			fact: ""
		},

		{
			question: "Who killed the Governor?",
			choices: ["Rick", "Maggie", "Michonne", "Lilly"],
			questNum: "9. ",
			correct: 3,
			fact: ""
		},

		{
			question: "What do the people of Woodbury call the zombies?",
			choices: ["scary zombies", "walkers", "biters", "geeks"],
			questNum: "10. ",
			correct: 2,
			fact: ""
		}

	]
	
	//Global Variables
	var currentQuestion = 0;
	var numCorrect = 0;

	//Play Intro Theme Function
	var playIntro = function () {

  		$('#theme')[0].volume = 0.5;
  		$('#theme')[0].load();
  		$('#theme')[0].play();

	}

	//Fade In Jumbotron Intro
	var fadeIntro = function () {

		$('.intro').fadeIn(5000);	

	}

	//Start Quiz Function
	var start = function () {

		$('.quiz').fadeIn(1000);

	}

	//Submit Answer Function
	var submitAnswer = function () {

		var answer = $("input[type='radio']:checked").val();
		
		if ( answer == questions[currentQuestion].correct ) {
			alert("Correct!!!");
			numCorrect ++;
		}

		else {
			alert("Wrong!!!");
		}

		currentQuestion ++;
		nextQuestion();

	}

	//Next Question Function
	var nextQuestion = function () {

		var newQuestion = '<h2>' + questions[currentQuestion].questNum + questions[currentQuestion].question + '</h2>';
		var newChoices = '<input type="radio" name="option" value="0"> ' + questions[currentQuestion].choices[0] + '<br><input type="radio" name="option" value="1"> ' + questions[currentQuestion].choices[1] + '<br><input type="radio" name="option" value="2"> ' + questions[currentQuestion].choices[2] + '<br><input type="radio" name="option" value="3"> ' + questions[currentQuestion].choices[3];
		$('.question-wrapper').html(newQuestion);
		$('.answer-wrapper').html(newChoices);

	}

	//Play Intro Theme
	playIntro();

	//Fade In Jumbotron Intro	
	fadeIntro();	

	//Start Quiz
	$('.startBtn').click(function () {

		start();

	});

	//Submit Answer
	$('#submit').click(function () {

		submitAnswer();

	});


















});