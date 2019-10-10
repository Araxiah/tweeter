//this refers to the "Write a Tweet" button and just toggles it when clicked
$(document).ready(function () {
  $('.button').click(function () {
    $('.new-tweet').toggle(1000);
  });
});
