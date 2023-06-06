//공통 접두사를 출력하는 프로그램 작성
function solution(s) {
  let answer = "";

  let len = Number.MAX_SAFE_INTEGER;
  s.forEach((x) => {
    len = Math.min(len, x.length);
  });

  return answer;
}

console.log(solution(["long", "longtime", "longest"]));
