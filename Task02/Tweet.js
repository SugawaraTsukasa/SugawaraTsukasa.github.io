let answer = document.querySelector("#answer");
let answerHTML = "";
answerHTML = "<ul style=\"list-style:none;\">";

for (let i = 0; i < tweets.length; i++) {
  answerHTML = answerHTML
      + "<li>"
      + "<div class='thm'>"
      + "<img alt='サムネ' src="
      +
      tweets[i].avatar
      + ">"
      + "</div>"
      + "<div class='text'>"
      + "<b>"
      + tweets[i].name
      + "</b>"
      + ": "
      + tweets[i].message
      + " "
      + "<i>"
      + tweets[i].tweetedAt
      + "</i>"
      + "</div>"
      + "</li>"
      + "<hr>";
}

answerHTML = answerHTML + "</ul>";

answer.innerHTML = answerHTML;

function jBtn() {
  console.log("ボタン押された！");
  answerHTML = "<ul style=\"list-style:none;\">";
  //answerHTML="";
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === "次郎") {
      answerHTML = answerHTML
          + "<li>"
          + "<div class='thm'>"
          + "<img alt='サムネ' src="
          +
          tweets[i].avatar
          + ">"
          + "</div>"
          + "<div class='text'>"
          + "<b>"
          + tweets[i].name
          + "</b>"
          + ": "
          + tweets[i].message
          + " "
          + "<i>"
          + tweets[i].tweetedAt
          + "</i>"
          + "</div>"
          + "</li>"
          + "<hr>";
    }
  }

  answerHTML = answerHTML + "</ul>";

  answer.innerHTML = answerHTML;
}

function sBtn() {
  console.log("ボタン押された！");
  answerHTML = "<ul style=\"list-style:none;\">";
  //answerHTML="";
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === "三郎BOT") {
      answerHTML = answerHTML
          + "<li>"
          + "<div class='thm'>"
          + "<img alt='サムネ' src="
          +
          tweets[i].avatar
          + ">"
          + "</div>"
          + "<div class='text'>"
          + "<b>"
          + tweets[i].name
          + "</b>"
          + ": "
          + tweets[i].message
          + " "
          + "<i>"
          + tweets[i].tweetedAt
          + "</i>"
          + "</div>"
          + "</li>"
          + "<hr>";
    }
  }

  answerHTML = answerHTML + "</ul>";

  answer.innerHTML = answerHTML;
}

function tBtn() {
  console.log("ボタン押された！");
  answerHTML = "<ul style=\"list-style:none;\">";
  //answerHTML="";
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === "太郎") {
      answerHTML = answerHTML
          + "<li>"
          + "<div class='thm'>"
          + "<img alt='サムネ' src="
          +
          tweets[i].avatar
          + ">"
          + "</div>"
          + "<div class='text'>"
          + "<b>"
          + tweets[i].name
          + "</b>"
          + ": "
          + tweets[i].message
          + " "
          + "<i>"
          + tweets[i].tweetedAt
          + "</i>"
          + "</div>"
          + "</li>"
          + "<hr>";
    }
  }

  answerHTML = answerHTML + "</ul>";

  answer.innerHTML = answerHTML;
}

function allBtn() {
  console.log("ボタン押された！");
  answerHTML = "<ul style=\"list-style:none;\">";
  //answerHTML="";
  for (let i = 0; i < tweets.length; i++) {
    answerHTML = answerHTML
        + "<li>"
        + "<div class='thm'>"
        + "<img alt='サムネ' src="
        +
        tweets[i].avatar
        + ">"
        + "</div>"
        + "<div class='text'>"
        + "<b>"
        + tweets[i].name
        + "</b>"
        + ": "
        + tweets[i].message
        + " "
        + "<i>"
        + tweets[i].tweetedAt
        + "</i>"
        + "</div>"
        + "</li>"
        + "<hr>";
  }

  answerHTML = answerHTML + "</ul>";

  answer.innerHTML = answerHTML;
}