var delay = 1000;
var fadeInDuration = 2000;

$(document).ready(function() {
	$('.fadeIn').removeClass('notShown').fadeIn(fadeInDuration/5);
	$('.slide').addClass('slideUp');
	
  $('.first').fadeIn(fadeInDuration).removeClass('hidden');
  $('.second').delay(delay).fadeIn(fadeInDuration).removeClass('hidden');
  $('.third').delay(delay*2).fadeIn(fadeInDuration).removeClass('hidden');
  $('.fourth').delay(delay*3).fadeIn(fadeInDuration).removeClass('hidden');
});