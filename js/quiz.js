var score = 0; //set score to 0;
var total = 5; // total number of questions;
var point = 2; //point per correct answer
var highest = total * point;


//initializer
function init(){
	//set correct answers
	sessionStorage.setItem('a1','a');
	sessionStorage.setItem('a2','b');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','b');
	sessionStorage.setItem('a5','b');
}


$(document).ready(function(){
	//hide all questions
	$('.questionForm').hide();

	//show first question
	$('#q1').show();

	//create universal event handler
	$('.questionForm #submit').click(function(){
		//get data attributes
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		//hide all questions
		$('.questionForm').hide();
		//show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false;
	});

	// $('#q5 #submit').click(function(){
	// 	$('#results').fadeIn(300);
	// 	return false;
	// });

});


//process the answers
function process(n){

	var submitted = $('input[name=q'+n+']:checked').val();

	if(submitted==sessionStorage.getItem('a'+n+'')){
		score+=point;
	}

	if(n == total){
		$('#results').html('<h3>Your Final score is: '+score+' out of '+highest+'. </h3><a href="index.html">Take Quiz Again</a>');

		if(score == highest){
			$('#results').append('<h1>You are a master!</h1><img src="img/master.png"/>');
		}else if(score<=6) {
			$('#results').append('<h1>Go back to study! you lower the IQ of the whole department!</h1><img src="img/gostudy.jpg" />');
		}
	}
	return false;
}


//add event listener

window.addEventListener('load',init,false);





