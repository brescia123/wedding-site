$(function () {
  $(".card").click(function (index) {
    console.log("ok");
    $(this).find(".card-detail").toggleClass("show-detail");
  });
})
