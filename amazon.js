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

console.log(countGroups(['10001', '11100', '01100', '00011', '000001']));