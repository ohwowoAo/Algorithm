//중복문자제거
function solution(s) {
  let answer = "";
  const set = new Set(s);
  answer = [...set].join("");

  //v는 배열 요소의 하나, i는 몇번째인지, self는 s.split그 자체
  //let answer = s.split('').filter(v,i,self) => self.indexOf(v) === i).join('');
  return answer;
}

console.log(solution("ksdkkfekt"));
