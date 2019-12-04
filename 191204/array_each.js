
/*
//console.log(fruitNames);

//let answer=document.querySelector("#answer");
//slet answerHTML="";
answerHTML="<ul>";


for(let i=0;i<fruitNames.length;i++){

  answerHTML=answerHTML+"<li>"+fruitNames[i]+"</li>";

}

answerHTML=answerHTML+"</ul>";

answer.innerHTML=answerHTML;
*/

let answer=document.querySelector("#answer");
let answerHTML="";
answerHTML="<ul>";

for (let i=0;i<tweets.length;i++){
  answerHTML=answerHTML
      +"<li>"
      +"<b>"
      +tweets[i].name
      +"</b>"
      +": "
      +tweets[i].message
      +" "
      +"<i>"
      +tweets[i].tweetedAt
      +"</i>"
      +"</li>";
}

answerHTML=answerHTML+"</ul>";

answer.innerHTML=answerHTML;
