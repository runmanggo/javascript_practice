// console.log(window);

// document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

// document.querySelector("#external-link");

// //1.
// console.dir(document);
// let h1 = document.body.children[0];
// // let h1 = document.body.firstElementChild;

// //2.
// console.log(h1.parentElement);
// console.dir(h1.nextElementSibling); // 형제

// //3
// let h1Id = document.getElementById("h1");

// //4
// let p2 = document.querySelector(".paragraph");
// p2.textContent = "hi";

//자바스크립트로 새로운 요소 만들기
let newA = document.createElement("a");
newA.href = "naver.com";
newA.textContent = "네이버";
//특정 위치 저장하려면
let P1 = document.querySelector("p");
P1.append(newA);
//지우기
//요소 선택
let h1 = document.querySelector("h1");
//지우기
//h1.remove(); //최신 브라우저
//h1.parentElement.removeChild(h1); //낡은 브라우저 / h1의 부모요소 선택한 후에 그 부모요소의 자식요소(h1) 삭제

// 요소 옮기기
//요소 올기기전에 부모요소 부터 선택하기 insertBefore / append 사용해서 해당 부모 요소 안으로 이동할 수 있게 해주기
let p2 = document.querySelector(".paragraph");
p2.parentElement.append(p2);

h1.innerHTML = "Hi This is <strong>!!</strong>";
