//같은 빈도수 만들기
function solution(nums) {
  let answer = [];
  let sH = new Map();
  //두번째방법
  let maxV = 0;

  for (let x of nums) {
    sH[x] = (sH[x] || 0) + 1;
    maxV = Math.max(maxV, sH[x]);
  }
  for (let x of Object.keys(sH)) {
    answer.push(maxV - sH[x]);
  }

  //첫번째방법
  // for (let x of nums) {
  //   sH.set(x, (sH.get(x) || 0) + 1);
  //   // console.log(sH);
  // }

  // let MaxV = 0;
  // for (let [key, val] of sH) {
  //   console.log(key);
  //   if (MaxV < val) {
  //     MaxV = val;
  //     // console.log(MaxV);
  //     answer.push(MaxV - val);
  //   } else {
  //     answer.push(MaxV - val);
  //   }
  // }
  return answer;
}
console.log(solution("aaabc"));
