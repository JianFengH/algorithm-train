/**
 * stockProfits:[0, 1, 5, 2, 3, 1, 3, 6]
 * target: 6
 * 
 * output: 3
 * 1+5, 3+3, 0+6
 */
function pairNumber(stockProfits, target) {
  const stack = [];
  for (let i = 0, len = stockProfits.length; i < len; i++) {
    const currValue = stockProfits[i];
    if (stack[currValue]) {
      stack[currValue]++;
    } else {
      stack[currValue] = 1;
    }
  }

  let count = 0;
  for (let i = 0, len = stack.length; i <= len / 2; i++) {
    if (stack[i]) {
      const diff = target - i;
      if (diff > i && stack[diff]) {
        count++;
      } else if (diff === i && stack[i] >= 2) {
        count++;
      }
    }
  }
  return count;
}

function pairNumber2(stockProfits, target) {
  const strMap = {};
  for (let i = 0, len = stockProfits.length; i < len - 1; i++) {
    const currValue = stockProfits[i];
    const diff = target - currValue;
    const findedValue = stockProfits.slice(i+1).find((item) => item === diff);
    if(findedValue !== undefined) {
      let key;
      if(diff < currValue) {
        key = '' + diff + currValue;
      } else {
        key = '' + currValue + diff;
      }
      strMap[key] = true;
    }
  }
  return Object.keys(strMap).length;
}

// console.log(pairNumber([0, 1, 5, 2, 3, 1, 3, 6], 6));
console.log(pairNumber2([0, 1, 5, 2, 3, 1, 3, 6], 6));