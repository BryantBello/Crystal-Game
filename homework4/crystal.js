
//Global Variables
var wins = 0;
var losses = 0;
var score = 0;
var winningNumber = Math.floor((Math.random() * 120) + 19);

//Crystal Variables
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);



$(document).ready(function(){
$('#red').click(function(){
			score = score + redCrystal;
			results();
		})

$('#blue').click(function(){
			score = score + blueCrystal;
			results();	
		})

$('#yellow').click(function(){
			score = score + yellowCrystal;
			results();
		})

$('#green').click(function(){
			score = score + greenCrystal;
			results();
		})
		
		$("#randomNumber").append(winningNumber);
		$("#score").append(score);

});


//html
function updateScore(){
	$('#score').empty();
	$('#score').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#score').replaceAll(score);
}

// Restart
function restart(){
	score = 0;
	winningNumber = Math.floor((Math.random() * 120) + 19);
	$("#randomNumber").empty();
	$("#randomNumber").append(winningNumber);
	redCrystal = Math.floor((Math.random() * 12) + 1);
	blueCrystal = Math.floor((Math.random() * 12) + 1);
	yellowCrystal = Math.floor((Math.random() * 12) + 1);
	greenCrystal = Math.floor((Math.random() * 12) + 1);
	updateScore();
}

function results (){
	if (score == winningNumber) {
			wins = wins + 1;
			alert('Congratulations. You Won! Please play again!');
			restart();
			}			
		else if (score > winningNumber) {
			losses = losses + 1;
			alert('You lost. Please play again!');
			restart();
			}
		else {
			updateScore();
			}
}