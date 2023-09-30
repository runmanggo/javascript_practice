const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

//ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "index.html");
  // res.sendFile(htmlFilePath);
  res.render("index");
});

app.get("/restaurants", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath);

  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/recommend", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  // res.sendFile(htmlFilePath);
  res.render("recommend");
});

app.post("/recommend", (req, res) => {
  const restaurant = req.body;

  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  // JSON 텍스트 기반의 데이터 포멧 > 문자열로 변환해서 저장해야함
  res.redirect("/confirm");
  //파일에서 JSON 데이터를 읽어오려면 해당 JSON 문자열을 파싱(parse)하여 JavaScript 객체로 다시 변환
});

app.get("/confirm", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  // res.sendFile(htmlFilePath);
  res.render("confirm");
});

app.get("/about", (req, res) => {
  // const htmlFilePath = path.join(__dirname, "views", "about.html");
  // res.sendFile(htmlFilePath);
  res.render("about");
});

app.listen(3000, () => {
  console.log("3000번 포트를 듣고 있는중@@");
});
