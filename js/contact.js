var delay = 200;

$(document).ready(function() {
	setTimeout(function() {
		$('.coffee').removeClass('notShown').addClass('slideUp');
	}, delay);
	setTimeout(function() {
		$('.email').removeClass('notShown').addClass('slideUp');
	}, delay*2);
	setTimeout(function() {
		$('.phone').removeClass('notShown').addClass('slideUp');
	}, delay*3);
});