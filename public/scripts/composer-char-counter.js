$(document).ready(function () {
  $(".new-tweet form textarea").on('keydown', function () {
    let num = this.value.length;
    let counter = $(".new-tweet form textarea").siblings('.counter').text(140 - num)
    if (num > 140) {
      counter.css("color", "red");
    }
    if (num < 140) {
      counter.css("color", "black");
    }
    if (num === 141) {
      alert("whoops too long!")
    }
    if (num > 140) {
      $("#submitTweet input").prop('disabled', true)
    }
    if (num <= 140) {
      $("#submitTweet input").prop('disabled', false)
    }
  });
  console.log("Working?");

});