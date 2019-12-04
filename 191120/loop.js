function doLoop() {

  let result;
  let i = 0;
  let b = 0;

  while (i <= 10000) {
    b = b + i;
    if (b >= 50000) {
      console.log(b + "は50000以上");
      break;
    }
    console.log(i + "回目の計算は" + b);
    i++;
  }

  result = b;

  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}

function doFizzBuzz() {
  let answer = document.querySelector("#answer");
  let i = 1;
  let outPut;

  while (i <= 100) {
    if (i % 15 === 0) {
      outPut = answer.innerHTML + "<br>" + "FizzBuzz";
    } else if (i % 3 === 0) {
      outPut = answer.innerHTML + "<br>" + "Fizz";
    } else if (i % 5 === 0) {
      outPut = answer.innerHTML + "<br>" + "Buzz";
    } else {
      outPut = answer.innerHTML + "<br>" + i;
    }

    answer.innerHTML=outPut;
    i++;
  }
}