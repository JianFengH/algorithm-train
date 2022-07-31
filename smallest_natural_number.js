// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**
 * 
 * find the smallest integer which is not in A and larger than 1.
 */
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const indexList = [];
  for(let i=0,len=A.length; i<len; i++) {
      const curValue = A[i];
      if(curValue > 0) {
          indexList[curValue] = true;
      }
  }
  for(let i=1,len=indexList.length; i<=len; i++) {
      if(!indexList[i] || i===len) {
          return i;
      }
  }
  return 1;
}

const A = [1, 3, 6, 4, 1, 2];
console.log(solution(A));