var delay = 1000;

$(document).ready(function () {
    $('.first').fadeIn(2000).removeClass('hidden');
    $('.second').delay(delay).fadeIn(2000).removeClass('hidden');
    $('.third').delay(delay*2).fadeIn(2000).removeClass('hidden');
    $('.fourth').delay(delay*3).fadeIn(2000).removeClass('hidden');
});