function checkUserInput() {
  let userInput = document.querySelector('#user_input').value;
  let result;

  if (userInput === "隣の客はよく柿食う客だ") {
    result = "〇";
  } else {
    result = "✕";
  }

  let answerElement = document.querySelector('#answer');
  answerElement.innerHTML = result;
}

function checkAge() {
  let age = Number(document.querySelector("#age").value);
  let result;

  if (age < 0) {
    result = "エラー";
  } else if (age < 20) {
    result = "未成年"
  } else if (age <= 20) {
    result = "成人"
  } else {
    result = "超高齢者";
  }

  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;

}

function checkYear() {
  let year = Number(document.querySelector("#year").value);
  let result;



  if (year % 4 === 0) {
    result = "閏年";
    if (year % 400 === 0) {
      result = "閏年";
    } else if (year % 100 === 0) {
      result = "平年";
    }
  } else {
    result = "平年"
  }

/*
if(year%400===0){
  result="閏年";
}else if(year%100===0){
  result="平年";
}else if (year%4===0){
  result="閏年";
}else{
  result="平年";
}
*/
  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}

