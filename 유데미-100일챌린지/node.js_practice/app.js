const fs = require("fs"); //파일시스템
const path = require("path"); //경로 시스템

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false })); //들어오는 요청을 처리할 수 있지만 get/post 처럼 요청 종류에 신경 쓰지 않음
//추가 핸들러를 직접 추가할 수도 있죠 이런 하나 이상의 유형의 요청에 적용되는 일반 핸들러 함수는 일반적으로 미들웨어 함수하고 합니다
//어떤  종류의 데이티가 있는지 확인

/**
 * 브라우저의 주소 표시줄에 무언가를 입력하거나 새로고침 아이콘을 클릭할 때마다
실제로 GET 요청을 보내고 브라우저는 실제로 이 페이지가  원래 POST 요청을 통해 로드되었음을 인식하기 때문에 
 */

/** 
 *  * 다시 {request} 매개변수 값은 이건 들어오는 요청에 대한 추가 정보를 제공
{response} 매개변수 값은 응답을 준비하는 기능을 제공 */

//express 서버가 http 요청을 받게되면, res를 반환하게 된다
app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>your name<input type='text' name='username'></input><button>submit</button></label></form>"
  );
  //response를 보내는 역할
  // Post > 해당 서버에 데이터를 저장하는 경우
});

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "<h1>");
}); //localhost:3000/currenttime

app.post("/store-user", function (req, res) {
  const userName = req.body.username; // post 요청의 본문에 가져오려는것

  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);

// const http = require("http");

//서버생성
// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "<h1>");
//   } else {
//     response.statusCode = 200;
//     response.end("<h1>hello World</h1>");
//   }
// }

//서버생성
// const server = http.createServer(handleRequest);

// server.listen(3000);
// listen에서 3000을 전달할것이고, 이코드가 실행되면 http.createServer가 만들어져서
//포트 3000에서 들어오는 요청을 수신하려고 한다
