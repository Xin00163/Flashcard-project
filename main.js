$(document).ready(function() {
  $(".flashcard").on("click", function(){
    var visible = $(this)
    var hidden = $(".hide")

    visible.addClass("hide")
    hidden.removeClass("hide")
  })
});
