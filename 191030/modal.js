function showModal() {
  let modal=document.getElementById("modal");
  modal.innerHTML="文字";
}

function changeRed() {
  let modal=document.getElementById("modal");
  modal.style.background="red";
  modal.innerHTML="赤になった";
}

function changeYellow() {
  let modal=document.getElementById("modal");
  modal.style.background="yellow";
  modal.innerHTML="黄色になった";
}

function changeGreen() {
  let modal=document.getElementById("modal");
  modal.style.background="green";
  modal.innerHTML="緑になった";
}

function appendCircle() {
let modal=document.getElementById("modal");
modal.append("〇");
}

function appendCross(){
  let modal=document.getElementById("modal");
  modal.append("✕");

}

function checkNumber() {
  let num=document.querySelector('#num');
  if(Number(document.querySelector(`#num`).value)!==10){
    window.alert("true")
  }else{
    window.alert("false");
  }
}

function plusOne() {
  let modal=document.querySelector("div#modal");
  modal.innerHTML=Number(modal.innerHTML)+1;
}

function plusFive() {
  let modal=document.querySelector("div#modal");
  modal.innerHTML=Number(modal.innerHTML)+5;
}

function plusTen() {
  let modal=document.querySelector("div#modal");
  modal.innerHTML=Number(modal.innerHTML)+10;
}