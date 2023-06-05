//중복문자제거
function solution(s) {
  let answer = "";
  const set = new Set(s);
  answer = [...set].join("");
  return answer;
}

console.log(solution("ksdkkfekt"));
