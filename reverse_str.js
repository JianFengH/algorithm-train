/**
 * 1234 -> 4312
 * 123 -> 321
 */
function reverse_str(str) {
  const strArr = str.split('');
  for (let i = 0, len = strArr.length; i < len / 2; i++) {
    const symmetryIndex = len - i - 1;
    const currIndexValue = strArr[i];
    strArr[i] = strArr[symmetryIndex];
    strArr[symmetryIndex] = currIndexValue;
  }
  return strArr.join('');
}

console.log(reverse_str('1234'));
console.log(reverse_str('123'));