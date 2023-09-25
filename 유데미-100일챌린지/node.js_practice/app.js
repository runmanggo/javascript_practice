const http = require("http");
function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "<h1>");
  } else {
    response.statusCode = 200;
    response.end("<h1>hello World</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
// listen에서 3000을 전달할것이고, 이코드가 실행되면 http.createServer가 만들어져서
//포트 3000에서 들어오는 요청을 수신하려고 한다
