//옷가게 할인 받기
function solution(price) {
  if (price >= 100000 && price < 300000) {
    return Math.floor(price - price * 0.05);
  } else if (price >= 300000 && price < 500000) {
    return Math.floor(price - price * 0.1);
  } else if (price >= 500000) {
    return Math.floor(price - price * 0.2);
  } else {
    return price;
  }
}

//로그인 성공?
function solution(id_pw, db) {
  let answer = "";

  db.map((item) => {
    if (id_pw[0] === item[0] && id_pw[1] === item[1]) answer = "login";
    else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) answer = "wrong pw";
    else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) answer = "fail";
  });

  return answer;
}
//문자열 밀기
// 쉽게 생각해서 마지막 문자를 앞으로 땡겨온다고 생각하면 됨

function solution(A, B) {
  let arr = [...A];

  for (let i = 0; i < arr.length; i++) {
    if (A === B) return i;
    else {
      arr.unshift(arr.pop()); //배열 arr에서 마지막 요소를 꺼내서 배열의 앞에 추가
      if (arr.join("") === B) return i + 1;
    }
  }
  return -1;
}

//모스부호
function solution(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  const morseWords = letter.split(" "); // 공백을 기준으로 모스 부호를 분할
  let answer = "";

  for (const morseWord of morseWords) {
    if (morse[morseWord]) {
      answer += morse[morseWord];
    } else {
      answer += " ";
    }
  }
  return answer;
}

//치킨 쿠폰
function solution(chicken) {
  let answer = 0;
  if (chicken > 0) {
    answer += Math.floor(chicken / 10);
  }
}
