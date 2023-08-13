const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

$.get("https://codingapple1.github.io/js/more1.json", function (data) {
  // 외부 JSON 데이터를 받아온 후 합칠 작업을 수행
  const externalProducts = data; // 가져온 json 데이터를 변수로 지정

  // 두 배열 합치기
  const combinedProducts = products.concat(externalProducts);
  //원래 product 배열에다가 json 데이터 (externalProducts)를 concat 매서드를 사용해서 변수 combinedProducts 에 담음

  const originProducts = [...combinedProducts]; // 데이터 원상복구

  // 데이터 묶어서 카드 형식으로 보이게 송출
  combinedProducts.forEach((a, i) => {
    let cardList1 = `<div class="col-sm-4">
       <img src="https://via.placeholder.com/600" class="w-100" />
       <h5>${a.title}</h5>
       <p>가격: ${a.price}</p>
     </div>`; // 템플릿 만듬

    $(".row").append(cardList1); // append 사용해서 추가
  });

  // 가격 낮은순 부터 보여주는 것
  $(".downBtn").click(function () {
    combinedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
    $(".row").html("");
    combinedProducts.forEach((a, i) => {
      let cardList1 = `<div class="col-sm-4">
       <img src="https://via.placeholder.com/600" class="w-100" />
       <h5>${a.title}</h5>
       <p>가격: ${a.price}</p>
     </div>`; // 템플릿 만듬
      $(".row").append(cardList1); // append 사용해서 추가
    });
  });

  //가격 높은 순부터 정렬
  $(".upBtn").click(function () {
    combinedProducts.sort(function (a, b) {
      return b.price - a.price;
    });
    $(".row").html("");
    combinedProducts.forEach((a, i) => {
      let cardList1 = `<div class="col-sm-4">
       <img src="https://via.placeholder.com/600" class="w-100" />
       <h5>${a.title}</h5>
       <p>가격: ${a.price}</p>
     </div>`; // 템플릿 만듬
      $(".row").append(cardList1); // append 사용해서 추가
    });
  });

  // 클릭을 한번 더 누르면 데이터 리셋
  $(".btn").on("click", function () {
    if ($(".row").css("display") == "none") {
      $(".row").show();
    } else {
      $(".row").hide();
    }

    $(".row").html("");

    originProducts.forEach((a, i) => {
      let cardList1 = `<div class="col-sm-4">
       <img src="https://via.placeholder.com/600" class="w-100" />
       <h5>${a.title}</h5>
       <p>가격: ${a.price}</p>
     </div>`;
      $(".row").append(cardList1);
    });
  });
});
