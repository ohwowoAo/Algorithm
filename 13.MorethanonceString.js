//두번이상 사용한 최초 문자
function solution(s) {
  cnt = {};
  //객체카운팅
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
    if (cnt[x] === 2) return x;
  }
  // console.log(cnt);
  return -1;
}
console.log(solution("abccbaaxz"));
