//서로 다른 빈도수 만들기
function solution(nums) {
  let answer = [];
  let sH = {};
  let set = new Set();
  for (let x of s) {
    sH[x] = (sH[x] || 0) + 1;
  }
  for (let x of Object.keys(sH)) {
    while (set.has(sH[x])) {
      answer++;
      sH[x]--;
    }
    if (sH[x] === 0) continue;
    set.add(sH[x]);
  }
  return answer;
}
console.log(solution("aebbbbc"));
