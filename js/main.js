$(function() {

  $('#trip-link').click(function () {
    $('.trip-overlay').fadeIn('fast');
  });

  $('#close-trip').click(function () {
    $('.trip-overlay').fadeOut('fast');
  });
});
