function solution(str) {
  let splitStr = str.split('');
  let arrReversed = splitStr.reverse();
  let arrJoin = arrReversed.join('');
  return arrJoin;
}
console.log(solution('kiki'));

// yang lebih simple

const solution = (s) => [...s].reverse().join('');
