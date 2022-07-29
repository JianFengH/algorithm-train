/**
 * stocksProfit:[0, 1, 5, 2, 3, 1, 3, 6]
 * target: 6
 * 
 * output: 3
 * 1+5, 3+3, 0+6
 */
function pairNumber(stocksProfit, target) {
  const stack = [];
  for (let i = 0, len = stocksProfit.length; i < len; i++) {
    const currValue = stocksProfit[i];
    if (currValue <= target) {
      if (stack[currValue]) {
        stack[currValue]++;
      } else {
        stack[currValue] = 1;
      }
    }
  }

  let count = 0;
  for (let i = 0, len = stack.length; i < len; i++) {
    if (stack[i]) {
      const diff = target - i;
      if (diff > i && stack[diff]) {
        count++;
      } else if (diff === i && stack[diff] >= 2) {
        count++;
      }
    }
  }
  return count;
}

function getKey(currValue, diff) {
  let key;
  if (diff < currValue) {
    key = '' + diff + currValue;
  } else {
    key = '' + currValue + diff;
  }
  return key;
}
function pairNumber2(stocksProfit, target) {
  console.log('parameters:', stocksProfit.length, target);
  const strMap = {};
  stocksProfit = stocksProfit.filter((item) => item <= target);
  stocksProfit.sort((a, b) => a - b);
  console.log('stocksProfit:', stocksProfit);
  for (let i = 0, len = stocksProfit.length; i < len - 1; i++) {
    const currValue = stocksProfit[i];
    if (currValue <= target / 2) {
      const diff = target - currValue;
      // const key = getKey(currValue, diff);
      const key = '' + currValue + diff;
      if (!strMap[key]) {
        const findedValue = stocksProfit.slice(i + 1).find(item => item === diff);
        if (findedValue !== undefined) {
          strMap[key] = true;
        }
      }
    } else {
      break;
    }
  }
  return Object.keys(strMap).length;
}

// console.log(pairNumber([0, 1, 5, 2, 3, 1, 3, 6], 6));
// console.log(pairNumber([6, 6, 3, 9, 3, 5, 1], 12));

console.log(pairNumber2([0, 1, 5, 2, 3, 1, 3, 6], 6));