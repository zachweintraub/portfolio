$(document).ready(function() {

  console.log("locked and loaded");

  $('#about').click(function() {
    $('[id^=section]').addClass('invisible');
    $('#section-about').removeClass('invisible');
  })

  $('#projects').click(function() {
    $('[id^=section]').addClass('invisible');
    $('#section-projects').removeClass('invisible');
  })

  $('#cv').click(function() {
    $('[id^=section]').addClass('invisible');
    $('#section-cv').removeClass('invisible');
  })

  $('#contact').click(function() {
    $('[id^=section]').addClass('invisible');
    $('#section-contact').removeClass('invisible');
  })


});
