$(function() {
  initCover();
  $(".card-cover").click(function(e) {
    $(this).siblings('.card-detail').toggleClass('show');
  });
  $('.close-button').click(function(e) {
    $(this).parent().parent().find('.card-detail').toggleClass('show');
  });
});

var initCover = function() {
  var cover = $('#cover');
  if (cover.height == 0) {
    cover.height($(window).height());
    $(window).resize(function() {
      cover.height($(window).height());
    });
  }
}
