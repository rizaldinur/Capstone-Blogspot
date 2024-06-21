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
$(".btn-put").on("mousedown", function (e) {
  $("#overlay-put").addClass("show-overlay");
  $("#btn-put").val($(this).val());
});

// closeoverlaybtn put
$("#close-btn").on("mousedown", function (e) {
  $("#overlay-put").removeClass("show-overlay");
  $("#btn-put").removeAttr("value");
});

// close overlay on click outside box
$(window).on("mousedown", function (e) {
  if ($(e.target).is(".overlay")) {
    $(".overlay").removeClass("show-overlay");
    $("#btn-delete").removeAttr("value");
    $("#btn-put").removeAttr("value");
  }
});
