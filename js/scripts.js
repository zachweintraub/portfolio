$(document).ready(function() {

  console.log("locked and loaded");

  $('#about').click(function() {
    $('.selected').removeClass('selected');
    $('#about').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-about').removeClass('invisible');
  })

  $('#projects').click(function() {
    $('.selected').removeClass('selected');
    $('#projects').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-projects').removeClass('invisible');
  })

  $('#cv').click(function() {
    $('.selected').removeClass('selected');
    $('#cv').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-cv').removeClass('invisible');
  })

  $('#contact').click(function() {
    $('.selected').removeClass('selected');
    $('#contact').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-contact').removeClass('invisible');
  })


});
