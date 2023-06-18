//공통 접두사를 출력하는 프로그램 작성
function solution(s) {
  let answer = "";

  let len = Number.MAX_SAFE_INTEGER;
  s.forEach((x) => {
    len = Math.min(len, x.length);
  });
  for (i = 0; i < len; i++) {
    let set = new Set(); //중복없앰
    s.forEach((x) => {
      set.add(x[i]);
    });
    console.log(set);
    if (set.size === 1) answer += s[0][i];
    else break;
  }

  return answer;
}

console.log(solution(["long", "longtime", "longest"]));
