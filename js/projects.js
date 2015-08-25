var delay = 100;

$(document).ready(function() {
	setTimeout(function() {
		$('.appIcon').fadeIn(500).removeClass('hidden');
		$('.caption').removeClass('notShown').addClass('slideUp');

		$('.main-content').fadeIn(300).removeClass('hidden');
	}, delay);
});