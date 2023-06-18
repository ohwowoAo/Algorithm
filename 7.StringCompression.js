//문자열 압축
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " "; //공백까지가면 안되고 공백 앞에까지만 가야해서
  // let char = s.split("");

  // console.log(char);

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt); //자동으로 형변환 되기는 하지만 추가해주고싶어서 String추가
      cnt = 1;
    }
  }
  console.log(answer);
}
console.log(solution("KKKHSSSSSSE"));
