/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  console.log("hi");

  $("#submitTweet").submit(function (event) {
    event.preventDefault()
    let values = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: values,
      success: () => {
        console.log("completed POST");
        loadTweet();
      }
    });
  });


  const loadTweet = function () {
    $('#tweets-container').empty();
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: (responseJSON) => {
        console.log("completed GET");
        renderTweet(responseJSON);
      }
    });
  };

  const renderTweet = function (arr) {
    for (let i of arr) {
      console.log("renderTweet i = ", i);
      createTweetElement(i);
    }
  };

  const createTweetElement = function (i) {
    const escape = function (str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
    const safeHTML = `<p>${escape(i.content.text)}</p>`
    let markup = `
<article class="tweetstyle">
    <footer>
      <img class="profilePic" scr="${i.user.avatars}">
      <div>${i.user.name}</div>
      <div class="hashtag">${i.user.handle}</div>
    </footer>
    <div class="content">
      ${safeHTML}
    </div>
    <div class="time">
      ${i.created_at}
    </div>

  </article>
  `;
    $('#tweets-container').append(markup);
  };

  loadTweet();
});