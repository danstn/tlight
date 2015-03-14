$(function () {
  console.log("Document ready.");
  $('.light').on('click', function (e) {
    $('.light').css({ "opacity": 0.2 });
    $(this).css({ "opacity": 1 });
  });
});
