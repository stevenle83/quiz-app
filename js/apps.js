$(document).ready(function() { 

	//Questions Array

	var questions = [

		{
			question: "After the attack on the prison which casused the group's seperation. Glenn returns and finds who?",
			choices: ["Lizzie", "Lilly", "Tara", "Rosita"],
			questNum: 1,
			correct: 2,
			fact: ""

		},

		{
			question: "Why did the Governor want to kill Michonne?",
			choices: ["He was jealous of her relationship with Andrea", "She didn't kill Rick.", "She killed his henchmen.", "She killed his daughter, who was already a zombie."],
			questNum: 2,
			correct: 3,
			fact: ""
		},

		{
			question: "Which character chose to stay back at the CDC to die from the facility's explosion?",
			choices: ["Patricia", "Mika", "Amy", "Jacqui"],
			questNum: 3,
			correct: 3,
			fact: ""
		},

		{
			question: "Why did Otis accidentally shoot Carl?",
			choices: ["He thought Carl was a walker.", "Carl was annoying.", "He was shooting a deer.", "Carl was next to a walker."],
			questNum: 4,
			correct: 2,
			fact: ""
		},

		{
			question: "Which two characters' deaths were caused by Shane?",
			choices: ["Otis & Randall", "Otis & Dale", "Otis & Jimmy", "Otis & Patricia"],
			questNum: 5,
			correct: 0,
			fact: ""
		},

		{
			question: "Which character did Carol kill?",
			choices: ["Karen", "Lizzie", "David", "All of the above."],
			questNum: 6,
			correct: 3,
			fact: ""
		},

		{
			question: "When Rick, Michonne, and Carl returned to Rick's hometown, they ran into an old friend from season one. Who was he?",
			choices: ["Duane", "The Governor", "Morgan", "Shane"],
			questNum: 7,
			correct: 2,
			fact: ""
		},

		{
			question: "How did Hershel die?",
			choices: ["He was decapitated.", "He was bitten by a walker.", "He was shot.", "He lost another leg."],
			questNum: 8,
			correct: 0,
			fact: ""
		},

		{
			question: "Who killed the Governor?",
			choices: ["Rick", "Maggie", "Michonne", "Lilly"],
			questNum: 9,
			correct: 3,
			fact: ""
		},

		{
			question: "What do the people of Woodbury call the zombies?",
			choices: ["the dead", "walkers", "biters", "geeks"],
			questNum: 10,
			correct: 2,
			fact: ""
		}

	]
	
	//Global Variables
	var currentQuestion = 0;
	var numCorrect = 0;

	/*---Functions Declaration---*/

	//Play Intro Theme Function
	var playIntro = function () {

  		$('#theme')[0].volume = 0.5;
  		$('#theme')[0].load();
  		$('#theme')[0].play();

	}

	//Fade In Jumbotron/Intro Function
	var fadeIntro = function () {

		$('.intro').fadeIn(5000);	

	}

	//Start Quiz Function
	var start = function () {

		$('.quiz').fadeIn(1000);

	}

	//Display Current Score Function
	var displayScore = function () {

		var score = "Score: " + numCorrect + " out of 10 Correct.";

		$('#score').html(score);

	}

	//Display Progress Function
	var progress = function () {

		var progress = "Question number " + questions[currentQuestion].questNum + " out of 10." 

		$('#progress').html(progress);

	}

	//New Game Function
	var newGame = function () {

		numCorrect = 0;
		currentQuestion = 0;
		nextQuestion();
		displayScore();
		progress();
		$('#result').html("Result:");

	}

	//Next Question Function
	var nextQuestion = function () {

		var newQuestion = '<h2>' + questions[currentQuestion].question + '</h2>';
		var newChoices = '<input type="radio" name="option" value="0"> ' + questions[currentQuestion].choices[0] + '<br><input type="radio" name="option" value="1"> ' + questions[currentQuestion].choices[1] + '<br><input type="radio" name="option" value="2"> ' + questions[currentQuestion].choices[2] + '<br><input type="radio" name="option" value="3"> ' + questions[currentQuestion].choices[3];
		$('.question-wrapper').html(newQuestion);
		$('.answer-wrapper').html(newChoices);

	}

	//Submit Answer Function
	var submitAnswer = function () {

		var answer = $("input[type='radio']:checked").val();
		
		if ( answer == questions[currentQuestion].correct ) {

			numCorrect ++;
			$('#result').html("Result: Correct!!!");

		}

		else {

			$('#result').html("Result: Incorrect!!!");

		} 

		currentQuestion ++;
		progress();
		displayScore();
		nextQuestion();

	}

	/*---Calling Functons---*/

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

	//New Game
	$('#new').click(function () {

		newGame();

	});















});