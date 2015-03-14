$(function () {
  console.log("Document ready.");
  $('.light').on('click', function (e) {
    $('.light').css({ "opacity": 0.3 });
    $(this).css({ "opacity": 1 });
  });
});
