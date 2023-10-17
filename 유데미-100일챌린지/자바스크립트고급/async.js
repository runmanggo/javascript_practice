const fs = require("fs");
function readFile() {
  const fileData = fs.readFileSync("data.txt");
  console.log(fileData.toString());

  console.log("hi");
}

readFile();

/**
 * undefiend : 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
null : 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.
 */
