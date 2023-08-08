//회문문자열2
function solution(s) {
  let answer = "YES";
  let lt = 0,
    rt = s.length - 1;
  while (lt < rt) {
    if (s[lt] !== s[rt]) {
      let s1 = s.substring(lt, rt);
      let s2 = s.substring(lt + 1, rt + 1);
      if (
        s1 !== s1.split("").reverse().join("") &&
        s2 !== s2.split("").reverse().join("")
      )
        return "NO";
      break;
    } else {
      lt++;
      rt--;
    }
  }

  return answer;
}
// console.log(solution("abcabbakcba"));
console.log(solution("afgdfjlkssijr"));
