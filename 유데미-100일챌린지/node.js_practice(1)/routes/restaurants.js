const express = require("express");
const uuid = require("uuid");

const resData = require("../util/restaurant-file");

const router = express.Router();

router.get("/restaurants", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath);

  // const filePath = path.join(__dirname, "data", "restaurants.json");
  // const fileData = fs.readFileSync(filePath);
  // const storedRestaurants = JSON.parse(fileData);

  let order = req.query.order;
  let nextOrder = "desc";

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }
  if (order === "desc") {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.sort((a, b) => {
    if (
      (order === "asc" && a.name > b.name) ||
      (order === "desc" && b.name > a.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

//동적 라우팅 만들기
//사용자의 구체적인 값을 얻기 위해. req쓰고, 엑세스 할 수 있도록 params키를 작성
/**
 * prams는 실제 객체가 포함되어 있고 해당 객체에는 이경로의 속성으로 id 로 정의한 동적 플레이스 홀더가 있음
 */
router.get("/restaurants/:id", (req, res) => {
  const restaurantID = req.params.id;

  // const filePath = path.join(__dirname, "data", "restaurants.json");
  // const fileData = fs.readFileSync(filePath);
  // const storedRestaurants = JSON.parse(fileData);

  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantID) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }

  res.status(404).render("404");
});
/**
 * restaurant: restaurant  > 왼쪽은 restaurant-detail 에서 사용한 키
 * 오른쪽은 for문의 const restaurant 가리키고 있음
 *
 */

router.get("/recommend", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  // res.sendFile(htmlFilePath);
  res.render("recommend");
});

router.post("/recommend", (req, res) => {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storedRestaurants(restaurants);

  // fs.writeFileSync(filePath, JSON.stringify(restaurants));
  // JSON 텍스트 기반의 데이터 포멧 > 문자열로 변환해서 저장해야함
  res.redirect("/confirm");
  //파일에서 JSON 데이터를 읽어오려면 해당 JSON 문자열을 파싱(parse)하여 JavaScript 객체로 다시 변환
});

router.get("/confirm", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  // res.sendFile(htmlFilePath);
  res.render("confirm");
});

module.exports = router;
