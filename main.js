//1. addEventListener 만들고 그에 해당하는 function을 2번으로 만들기
document.addEventListener("click", printMouse);

//2. x,y를 보여줄 수 있는 function을 만들어서 addEventListner에 넣기
function printMouse(event) {
  document.body.textContent = `clientX: ${event.clientX}
  clientY: ${event.clientY}`;
  //"clientX: " + event.clientX + "-clientY:" + event.clientY;
}

// getBoundingClientRect() 써보기

let elem = document.querySelector(".box").getBoundingClientRect();
console.log(elem);
