/**
 * @param {*} n 12345.015
 * return 12.345.02
 */
function formatNum(n) {
  const decimalNum = Math.round(n * 100) / 100;
  const numStr = decimalNum.toString();
  const indexOfDot = numStr.indexOf('.');
  const first = numStr.slice(0, indexOfDot);
  const second = numStr.slice(indexOfDot);

  const strArr = first.split('');
  let newStr = '';
  for (let i = strArr.length - 1; i >= 0; i -= 3) {
    if (strArr[i]) {
      newStr = strArr[i] + newStr;
    }
    if (strArr[i - 1]) {
      newStr = strArr[i - 1] + newStr;
    }
    if (strArr[i - 2]) {
      newStr = strArr[i - 2] + newStr;
    }
    if (i - 3 > 0) {
      newStr = ',' + newStr;
    }
  }
  return newStr + second;
}

console.log(formatNum(12345.015));