/*
let num=1;
while(true){
  num=num*2;
  if(num>=10000){
    break;
  }
}
console.log(`num:${num}`);
*/

let num = 1;
while (num < 100) {
  num++;
  if (num % 3 !== 0) {
    continue;
  }
  console.log(`num: ${num}は3の倍数`);
}

let a=0;
while (a<10000){

  console.log(a);
}
