/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};



const tweetarray = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function () {
  const renderTweet = function (arr) {
    for (let i of arr) {
      createTweetElement(i);
    }
  };

  const createTweetElement = function (i) {
    let markup = `
<article class="tweetstyle">
    <footer>
      <img class="profilePic" scr="${i.user.avatars}">
      <div>${i.user.name}</div>
      <div class="hashtag">${i.user.handle}</div>
    </footer>
    <div class="content">
      ${i.content.text}
    </div>
    <div class="time">
      ${i.created_at}
    </div>

  </article>
  `;
    $('#tweets-container').append(markup);
  };
  renderTweet(tweetarray);
});