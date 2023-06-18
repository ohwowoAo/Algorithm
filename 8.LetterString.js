//회문문자열
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();

  //방법1
  // let left = 0;
  // let right = s.length - 1;
  // while (left < right) {
  //   if (s[left] !== s[right]) {
  //     return "NO";
  //   } else {
  //     left++;
  //     right--;
  //   }
  // }

  //방법2
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}
console.log(solution("Goog"));
