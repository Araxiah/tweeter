$(document).ready(function () {
  $(".new-tweet form textarea").on('keydown', function () {
    let num = this.value.length;
    let counter = $(".new-tweet form textarea").siblings('.counter').text(140 - num)

    if (num > 140) {
      counter.css("color", "red");
    }
  });
  console.log("Working?");

});