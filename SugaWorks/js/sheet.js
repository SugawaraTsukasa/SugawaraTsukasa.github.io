let sheetValues = null;
fetch("https://sheets.googleapis.com/v4/spreadsheets/1mC_14u7goulA7AaXP-5b5kItsMjtU8tm3YT0OjX9yCc/values/sheet1?key=AIzaSyAiPKoxSSeWwGZ9gDZMS74zmF2rwowDaHI").then(
    function (res) {
      return res.json();
    }
).then(
    function (json) {
      console.log(json.values);

      sheetValues = json.values;

      let answerHtml = "";

      for (let i = 0; i < sheetValues.length; i++)
        answerHtml = answerHtml + sheetValues[i][0] + sheetValues[i][1];

      document.querySelector("#answer").innerHTML = answerHtml;
    }
);