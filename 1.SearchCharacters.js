//특정문자가 입력받은 문자열에 몇개 존재하는지 찾아내기
function solution(s, c) {
  let answer = 0;

  //for반복문 돌려서 c값이 몇개 들어가 있는지 찾는 방법
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === c) {
  //     answer++;
  //   }
  // }
  // return answer;

  //split를 사용해서 c기준으로 잘라서 배열로 나타내면 c의 수보다 +1이 많기때문에 결과값에 -1해주기
  answer = s.split(c);
  return answer.length - 1;
}
console.log(solution("COMPUTERPROGRAMMINGRR", "R"));
