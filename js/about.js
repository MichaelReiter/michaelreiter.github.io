var delay = 1000;
var fadeInDuration = 2000;

$(document).ready(function() {
  $('.fadeIn').removeClass('notShown').fadeIn(fadeInDuration/5);
  $('.slide').removeClass('notShown').addClass('slideUp');
});