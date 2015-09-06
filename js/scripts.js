var delay = 1000;
var fadeInDuration = 2000;

$(document).ready(function() {
  $('.first').fadeIn(fadeInDuration);
  $('.second').delay(delay).fadeIn(fadeInDuration);
  $('.third').delay(delay*2).fadeIn(fadeInDuration);
  $('.fourth').delay(delay*3).fadeIn(fadeInDuration);
});