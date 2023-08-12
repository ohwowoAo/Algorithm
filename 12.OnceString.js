//한번 사용한 최초 문자
function solution(s) {
  let answer;
  let sH = new Map();

  for (let x of s) {
    // console.log(x);
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  // console.log(sH);

  for (let i = 0; i < s.length; i++) {
    if (sH.get(s[i]) === 1) {
      return i + 1;
    }
  }
  return -1;
}
console.log(solution("stringshowtime"));
