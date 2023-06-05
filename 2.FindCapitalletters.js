//대문자가 몇개 있는지 알아내보자
function solution(s) {
  let answer = 0;

  //for문 해결법
  // for (i = 0; i < s.length; i++) {
  //   if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
  //     answer++;
  //   }
  // }

  //for...of문법 해결법
  // for (let x of s) {
  //   let num = x.charCodeAt();
  //   if (num >= 65 && num <= 90) answer++;
  // }

  //x의 값이 x를 모두 대문자로 만든 후 동일하면 +
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

console.log(solution("KoreaTimeGood"));
