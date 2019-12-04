let tweets = [
  {
    name: "三郎BOT",
    message: "21時でござる",
    tweetedAt: "2019-11-01 21:00:00",
    avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"
  },
  {
    name: "次郎",
    message: "悲しいので寝ます",
    tweetedAt: "2019-11-01 20:14:44",
    avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png"
  },
  {
    name: "次郎",
    message: "33-4・・・・・",
    tweetedAt: "2019-11-01 20:13:03",
    avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png"
  },
  {
    name: "太郎",
    message: "満腹度が回復した",
    tweetedAt: "2019-11-01 20:05:38",
    avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
  },
  {
    name: "三郎BOT",
    message: "20時でござる",
    tweetedAt: "2019-11-01 20:00:00",
    avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"
  },
  {
    name: "太郎",
    message: "もぐもぐ・・・",
    tweetedAt: "2019-11-01 19:50:22",
    avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
  },
  {
    name: "太郎",
    message: "ごはんつくった！",
    tweetedAt: "2019-11-01 19:48:01",
    avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
  },
  {
    name: "太郎",
    message: "お腹空いたなあ....",
    tweetedAt: "2019-11-01 19:30:59",
    avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
  },
  {
    name: "太郎",
    message: "お腹空いたなあ",
    tweetedAt: "2019-11-01 19:08:01",
    avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
  },
  {
    name: "次郎",
    message: "久々にやきうやったるで！パワプロやけどな！",
    tweetedAt: "2019-11-01 19:04:12",
    avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png"
  },
  {
    name: "三郎BOT",
    message: "19時でござる",
    tweetedAt: "2019-11-01 19:00:00",
    avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"
  }];

let answer = document.querySelector("#answer");
let answerHTML = "";
answerHTML = "<ul style=\"list-style:none;\">";

for (let i = 0; i < tweets.length; i++) {
  answerHTML = answerHTML
      + "<li>"
      + "<div>"
      + "<img src="
      +
      tweets[i].avatar
      + " alt='サムネ' width=50 height=50 border='1'>"
      + "</div>"
      + "<div>"
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
          + "<div>"
          + "<img src="
          +
          tweets[i].avatar
          + " alt='サムネ' width=50 height=50 border='1'>"
          + "</div>"
          + "<div>"
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
          + "<div>"
          + "<img src="
          +
          tweets[i].avatar
          + " alt='サムネ' width=50 height=50 border='1'>"
          + "</div>"
          + "<div>"
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
          + "<div>"
          + "<img src="
          +
          tweets[i].avatar
          + " alt='サムネ' width=50 height=50 border='1'>"
          + "</div>"
          + "<div>"
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
        + "<div>"
        + "<img src="
        +
        tweets[i].avatar
        + " alt='サムネ' width=50 height=50 border='1'>"
        + "</div>"
        + "<div>"
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