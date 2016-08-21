$(document).ready(function() {
  $(".flashcard-body").on("click", function(){
    var visible = $(this)
    var hidden = visible.next(".hide")

    visible.addClass("hide")
    hidden.removeClass("hide")

    if(visible.hasClass("flashcard-back")){
      var parent = visible.parent()
      parent.removeClass("current")
      parent.next().addClass("current")
    }
  })
});
