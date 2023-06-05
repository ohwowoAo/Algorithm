//가장긴문자열뽑기
function solution(s) {
  let answer = "";
  maxL = Number.MIN_SAFE_INTEGER;
  //Number.MIN_SAFE_INTEGER : 정수값 중에서 가장 작은 값으로 초기화됨. 첫번째값을 무조건 true로 만들어서 들어가게 하기위함

  for (let x of s) {
    if (x.length > maxL) {
      maxL = x.length;
      answer = x;
    }
  }
  return answer;
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
