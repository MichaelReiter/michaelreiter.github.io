var delay = 200;

$(document).ready(function() {
	setTimeout(function() {
		$('h2').removeClass('notShown').addClass('slideUp');
		$('table').fadeIn(500).removeClass('hidden');
	}, delay);
});