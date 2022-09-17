/**
 * 
 */
function minimalHeaviestSetA(arr) {
  let totalAll = 0;
  const res = [];
  let totalRes = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    totalAll += arr[i];
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    if (totalRes <= totalAll - totalRes) {
      res.unshift(arr[j]);
      totalRes += arr[j];
    } else {
      break;
    }
  }
  return res;
}

function countGroups(related) {
  const res = [];
  const singleSet = new Set();
  singleSet.add(0);
  for (let j = 1; j < related.length; j++) {
    singleSet.add(j);
    for (let i = 0; i < j; i++) {
      const flag = related[i].substring(j, j + 1);
      if (flag === '1') {
        let iIndex = -1, jIndex = -1;
        for (let m = 0; m < res.length; m++) {
          const cset = res[m];
          if (cset.has(i)) {
            iIndex = m;
          }
          if (cset.has(j)) {
            jIndex = m;
          }
        }
        if (iIndex === -1 && jIndex === -1) {
          const nset = new Set();
          nset.add(i);
          nset.add(j)
          res.push(nset);
        } else if (iIndex >= 0 && jIndex === -1) {
          res[iIndex].add(j);
        } else if (jIndex >= 0 && iIndex === -1) {
          res[jIndex].add(i);
        } else if (iIndex >= 0 && jIndex >= 0 && iIndex !== jIndex) {
          // ... merge two set
          const iSet = res[iIndex];
          const jSet = res[jIndex];
          res.splice(iIndex, 1);
          for (const item of iSet) {
            jSet.add(item);
          }
        }

        singleSet.delete(i);
        singleSet.delete(j);
      }
    }
  }
  console.log('res', res);
  console.log('singleSet', singleSet);

  return res.length + singleSet.size;
}

// console.log(countGroups(['10001', '11100', '01100', '00011', '000001']));

/**
 * 
 * @param {*} power 
 * @returns 
 */
function findTotalPower(power) {
  const size = power.length;
  const sum = [];
  sum[0] = power[0];
  for (let i = 1; i < size; i++) {
    sum[i] = sum[i - 1] + power[i];
  }
  const dp = new Array(size);
  for (let i = 0; i < size; i++) {
    dp[i] = new Array(size).fill(0);
    dp[i][i] = power[i];
  }

  let result = 0;
  for (let j = 0; j < size; j++) {
    for (let i = j; i >= 0; i--) {
      if (i !== j) {
        dp[i][j] = Math.min(dp[i][j-1], dp[i+1][j]);
      }
      const min = dp[i][j];
      const total = sum[j] - sum[i] + power[i]; 
      result += min * total;
    }
  }
  return result % (Math.pow(10, 9) + 7);
}