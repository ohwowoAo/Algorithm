//숫자변환
function solution(s) {
  let answer = 0;
  let nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  for (let i = 0; i <= 9; i++) {
    s = s.replaceAll(nums[i], i);
  }
  answer = parseInt(s);
  //parseInt : 정수를 반환
  return answer;
}
console.log(solution("eightsixzerofivesevenfive"));
