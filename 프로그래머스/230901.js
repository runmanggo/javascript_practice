// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <div class="box box1"><button>Red click!</button></div>
//     <div class="box box2"><button>Green click!</button></div>
//     <div class="box box3"><button>Blue click!</button></div>
//
//<script> ---JS 코드---
function changeColor(color) {
  const boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.style.backgroundColor = color;
  }
}

// 각 버튼을 선택하고 클릭 이벤트 리스너를 추가
const redButton = document.querySelector(".box1 button");
const greenButton = document.querySelector(".box2 button");
const blueButton = document.querySelector(".box3 button");

redButton.addEventListener("click", function () {
  changeColor("red");
});

greenButton.addEventListener("click", function () {
  changeColor("green");
});

blueButton.addEventListener("click", function () {
  changeColor("blue");
});
//     </script>
//   </body>
// </html>
