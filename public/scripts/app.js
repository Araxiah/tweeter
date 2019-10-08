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

$(document).ready(function () {
  const createTweetElement = function (tweetobj) {

    let markup = `
<article class="tweetstyle">
    <footer>
      <img class="profilePic" scr="${tweetData.user.avatars}">
      <div>${tweetData.user.name}</div>
      <div class="hashtag">${tweetData.user.handle}</div>
    </footer>
    <div class="content">
      ${tweetData.content.text}
    </div>
    <div class="time">
      ${tweetData.created_at}
    </div>

  </article>
  `;
    return markup;
  };


  const $tweet = createTweetElement(tweetData);

  console.log($tweet)
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet);
});








// const $tweet = $("<article>").addClass("tweet");
// let markup = `
// <article class="tweetstyle">
//     <footer>
//       <img class="profilePic" scr="${tweetData.user.avatars}">
//       <div>${tweetData.user.name}</div>
//       <div class="hashtag">${tweetData.user.handle}</div>
//     </footer>
//     <div class="content">
//       ${tweetData.content.text}
//     </div>
//     <div class="time">
//       ${tweetData.created_at}
//     </div>

//   </article>
//   `;
// });
// };
