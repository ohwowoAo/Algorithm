//학생회장투표
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    // console.log(x);
    // console.log(sH);
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  let maxV = 0;
  for (let [key, val] of sH) {
    if (val > maxV) {
      maxV = val;
      answer = key;
    }
  }
  return answer;
}
console.log(solution("BACBAACCACCBDEDE"));
