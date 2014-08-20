$(document).ready(function() { 

	//Questions Array

	var questions = [

		{
			question: "After the attack on the prison which caused the group's seperation, Glenn returns to the prison and finds who?",
			choices: ["Lizzie", "Lilly", "Tara", "Rosita"],
			questNum: 1,
			correct: 2
		},

		{
			question: "Why did the Governor want to kill Michonne?",
			choices: ["He was jealous of her relationship with Andrea", "She didn't kill Rick.", "She killed his henchmen.", "She killed his zombie daughter, Penny."],
			questNum: 2,
			correct: 3
		},

		{
			question: "After everyone left the prison, where did they finally reunite?",
			choices: ["The Hideout", "The Terminus", "The Terminal", "Woodbury"],
			questNum: 3,
			correct: 1
		},

		{
			question: "Why did Otis accidentally shoot Carl?",
			choices: ["He thought Carl was a walker.", "Carl was annoying.", "He was shooting a deer.", "Carl was next to a walker."],
			questNum: 4,
			correct: 2
		},

		{
			question: "Which two characters' deaths were caused by Shane?",
			choices: ["Otis & Randall", "Otis & Dale", "Otis & Jimmy", "Otis & Patricia"],
			questNum: 5,
			correct: 0
		},

		{
			question: "Who was killed by Carol?",
			choices: ["Karen", "Lizzie", "David", "All of the above."],
			questNum: 6,
			correct: 3
		},

		{
			question: "When Rick, Michonne, and Carl returned to Rick's hometown, they ran into an old friend. Who was he?",
			choices: ["Duane", "The Governor", "Morgan", "Shane"],
			questNum: 7,
			correct: 2
		},

		{
			question: "How did Hershel die?",
			choices: ["He was decapitated.", "He was bitten by a walker.", "He was shot.", "He lost another leg."],
			questNum: 8,
			correct: 0
		},

		{
			question: "Who killed the Governor?",
			choices: ["Rick", "Maggie", "Michonne", "Lilly"],
			questNum: 9,
			correct: 3
		},

		{
			question: "What do the people of Woodbury call the zombies?",
			choices: ["the dead", "walkers", "biters", "geeks"],
			questNum: 10,
			correct: 2
		},

		{
			question: "",
			choices:"",
			questNum: "",
			correct:""
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

	//Rank Results Function
	var rank = function () {

		if ( numCorrect <= 2 ) {

			$('#result').html("You must not have cable!");

		} else if ( numCorrect > 2 && numCorrect <= 4 ) {

			$('#result').html("You are a Walkind Dead Noobie!");

		} else if ( numCorrect > 4 && numCorrect <= 6 ) {

			$('#result').html("You must watch a lot of Walkding Dead!");

		} else if ( numCorrect > 6 && numCorrect <= 8 ) {

			$('#result').html("You know your Walkind Dead!");

		} else {

			$('#result').html("You watch too much Walking Dead!");
			
		}

	}

	//Display Current Score Function
	var displayScore = function () {

		var score = "Score: " + numCorrect + " Out Of 10 Correct.";

		$('#score').html(score);

	}

	//Display Progress Function
	var progress = function () {

		var progress = "Question Number " + questions[currentQuestion].questNum + " Out Of 10." 

		$('#progress').html(progress);

	}

	//New Game Function
	var newGame = function () {

		numCorrect = 0;
		currentQuestion = 0;
		nextQuestion();
		displayScore();
		progress();
		$('#submit').show();
		$('#result').html("Result:");

	}

	//Next Question Function
	var nextQuestion = function () {

		var newQuestion = '<h2>' + questions[currentQuestion].question + '</h2>';
		var newChoices = '<input type="radio" name="option" value="0"> ' + questions[currentQuestion].choices[0] + '<br><input type="radio" name="option" value="1"> ' + questions[currentQuestion].choices[1] + '<br><input type="radio" name="option" value="2"> ' + questions[currentQuestion].choices[2] + '<br><input type="radio" name="option" value="3"> ' + questions[currentQuestion].choices[3];

		$('.question-wrapper').html(newQuestion);
		$('.answer-wrapper').html(newChoices);

		if ( currentQuestion == 10 ) {

			$('.answer-wrapper').html("Thanks For Playing.<br><br><br>Review Your Results.<br><br><br>Click New Game To Start Over.");
			$('#submit').hide();
			$('#progress').html("You finished all 10 questions.");
			rank();

		}

	}

	//Submit Answer Function
	var submitAnswer = function () {

		var answer = $("input[type='radio']:checked").val();
		
		if ( answer == questions[currentQuestion].correct ) {

			numCorrect ++;
			$('#result').html("Result: Correct!!!");

		} else {

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