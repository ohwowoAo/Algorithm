//빈도수가 1인 가장 큰 숫자
function solution(nums) {
  let cnt = Array(1001).fill(0);
  //원소가 너무 크면 이렇게 잡으면 안됨. 메모리를 너무 많이 잡아먹기때문
  for (let x of nums) {
    cnt[x]++;
  }
  for (let i = 1000; i >= 1; i--) {
    if (cnt[i] === 1) return i;
  }
  return -1;
}
console.log(solution([1, 1, 2, 2, 3, 4, 5, 6, 7]));
