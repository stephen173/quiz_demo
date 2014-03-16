var quizArray = [
'28~76~Who was the third President of the United States?~George Washington~Abraham Lincoln~Thomas Jefferson~Andrew Jackson',
'27~55~Which of the following shapes has a vertical line of symmetry?~Nonagon~Crescent~Triangle~Septagon'
];
var qpp = 2; // questions per page to display
var reslink = "nytimes.com"; // file to link to at end of quiz


$('quizArray').hover(function(){
	$('.president1').show(); 
	}, function() {
		$('.president1').hide();
}):