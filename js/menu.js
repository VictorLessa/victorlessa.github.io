$(document).ready(function(){
$('.bar').click(function(){
	$('.bar-top').toggleClass('bar-top-active');
	$('.bar-bottom').toggleClass('bar-bottom-active');
	$('.main').toggleClass('main-active');
});
});