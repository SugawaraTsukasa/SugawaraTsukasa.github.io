function testFunction() {
  console.log("糖質50%OFFいちごドーナツ食べた");
}

function testMessage(msg1,msg2,msg3) {
  console.log(msg1);
  console.log(msg2);
  console.log(msg3);
}

testMessage("すが","ふが","ほげ");

function testMsg4(msg1,msg2="デフォ") {
console.log(msg1);
console.log(msg2);
}

testMsg4(1);

let taro={
  height:"100px",
  width:"200px",
  name:"たろう"
};

console.log(taro);
console.log(taro.name);
taro.name="じろう";
console.log(taro.name);
