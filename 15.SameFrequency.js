//같은 빈도수 만들기
function solution(nums) {
  let answer = [];
  let sH = new Map();

  for (let x of nums) {
    sH.set(x, (sH.get(x) || 0) + 1);
    // console.log(sH);
  }

  let MaxV = 0;
  for (let [key, val] of sH) {
    console.log(key);
    if (MaxV < val) {
      MaxV = val;
      // console.log(MaxV);
      answer.push(MaxV - val);
    } else {
      answer.push(MaxV - val);
    }
  }
  return answer;
}
console.log(solution("aaabc"));
