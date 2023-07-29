const input = document.querySelector("input"); //인풋창
const ul = document.querySelector("ul");
const addBtn = document.querySelector(".add-btn"); // 등록 버튼
const removeBtn = document.querySelector(".del-btn"); // 꼽표 이미지

addBtn.addEventListener("click", function () {
  if (input.value != "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const img = document.createElement("img");
    img.src = "./assets/엑스.svg";
    img.setAttribute("class", "del-btn");
    img.addEventListener("click", function (event) {
      event.target.parentNode.remove();
    });

    li.appendChild(img);
    ul.appendChild(li);

    li.style.cursor = "pointer";
    input.value = "";
    input.focus();
  }
});

/*코드 정리
if 문을 통해서 input에 입력되지 않았을때 조건을 넣음
input에 입력했을 경우 li 태그를 createElement를 사용하여 새로 생성함 
DOM을 이용해서 생겨난 li에 (input에 입력한 것들)를 value 이기에, input.value이 나오게 함  

li 안에 생성된 내용 + 꼽표가 있어서 삭제되게 구현
꼽표- img 태그를 createElement를 사용하여 새로 생성함 
새로 생성된 img 에 속성을 부여 하고 싶어서 setAttribute 사용하여 ("class" 클라스 지정, "del-btn" 클라스 이름)
img 태그 addEventListener를 사용하여 현재 이벤트 타겟 (현재 이벤트 실행중이 타겟)의 부모 태그를 지움
> img가 동적으로 추가 될 때 이벤트가 동시에 실행 되어야해서 바로 밑에 코드 작성

li 에 img 자식요소를 추가 > img 자식 요소를 포함한 li를 ul의 자식요소로 추가


input.value = "" > 이것은 input 값은 항상 비워두겠금 하기 위한 코드*/
