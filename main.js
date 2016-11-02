$(document).ready(function() {
  $(".flashcard-front").on("click", function(){
    $(this).addClass("hide");
    $(this).next(".flashcard-back").removeClass("hide");
  });
  $(".flashcard-back").on("click", function(){
    $(this).addClass("hide");
    $(this).prev(".flashcard-front").removeClass("hide");
  });
});
