// overlay delete
$(".btn-del").on("mousedown", function (e) {
  $("#overlay-del").addClass("show-overlay");
  $("#btn-delete").val($(this).val());
});

$(".btn-cancel").on("mousedown", function (e) {
  $("#overlay-del").removeClass("show-overlay");
  $("#btn-delete").removeAttr("value");
});
// overlay put
// closeoverlaybtn put
// close overlay on click outside box
$(window).on("mousedown", function (e) {
  if ($(e.target).is(".overlay")) {
    $(".overlay").removeClass("show-overlay");
    $("#btn-delete").removeAttr("value");
  }
});
