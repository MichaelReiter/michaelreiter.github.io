var delay = 100;

$(document).ready(function() {
	setTimeout(function() {
		$('.appIcon').removeClass('hiddenIcon').addClass('animation-target');
		$('.caption').removeClass('notShown').addClass('slideUp');
	}, delay);
	setTimeout(function() {
		$('.appIcon2').removeClass('hiddenIcon').addClass('animation-target');
	}, delay*2);
	setTimeout(function() {
		$('.appIcon3').removeClass('hiddenIcon').addClass('animation-target');
	}, delay*3);
});