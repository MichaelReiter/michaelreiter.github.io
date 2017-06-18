var delay = 100;

$(document).ready(function() {

  if ($(window).height() < 720 || $(window).width() < 720) {
    document.getElementById("ki").setAttribute('href', "https://itunes.apple.com/app/ki-music-writing-helper-for/id955086812");
    document.getElementById("spaceblaze").setAttribute('href', "https://itunes.apple.com/app/space-blaze-simple-yet-addicting/id968067298");
    document.getElementById("randomcolorpicker").setAttribute('href', "https://itunes.apple.com/app/random-color-picker-easy-tool/id979101026");
    document.getElementById("doyouevenlist").setAttribute('href', "https://play.google.com/store/apps/details?id=com.michaelreiter.dyel");
  }

	setTimeout(function() {
		$('.appIcon').fadeIn(500).removeClass('hidden');
		$('.caption').removeClass('notShown').addClass('slideUp');

		$('.main-content').fadeIn(300).removeClass('hidden');
	}, delay);

});