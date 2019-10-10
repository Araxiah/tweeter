//All of this is for the text box for "Write a Tweet" counter and button
$(document).ready(function () {
  $(".new-tweet form textarea").on('keydown', function () {
    let num = this.value.length;
    let counter = $(".new-tweet form textarea").siblings('.counter').text(140 - num);
    //Decides if the counter will be black or red
    if (num > 140) {
      counter.css("color", "red");
    }
    if (num < 140) {
      counter.css("color", "black");
    }
    //Disables the button and call the error toggle if the char count is at -1 or below
    if (num === 141) {
      $(".texterr").slideToggle(1000);
    }
    if (num > 140) {
      $("#submitTweet input").prop('disabled', true);
    }
    if (num <= 140) {
      $("#submitTweet input").prop('disabled', false);
    }
  });
});