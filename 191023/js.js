function hello() {
  console.log("こんにちはこんにちは");
}

function helloSomeone(name) {
  console.log("こんにちは"+name+"さん");
  console.log(`こんにちは${name}さん(バッククォートで変数の式展開)`);
}

function helloCircleArea(radius) {
  console.log(radius*radius*Math.PI);
}

function helloRectangleArea(width,height){
  console.log(width*height);
}

function circleArea(radius) {
  return radius*radius*Math.PI;
}

function rectangleArea(width,height) {
  return witht*height;
}

hello();
helloSomeone("菅原");
helloCircleArea(100);
helloRectangleArea(100,50);
console.log(circleArea(100));
console.log(rectangleArea(100,50));
