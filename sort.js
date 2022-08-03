/**
 * pointer to last index as the largest one for ourter loop
 * pointer to first index of unsorted array for inner loop
 * @param {float} entry 
 */
export function bubble_sort(entry) {
  const re = [].concat(entry);
  for (let i = re.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (re[j] > re[i]) {
        const t = re[i];
        re[i] = re[j];
        re[j] = t;
      }
    }
  }
  return re;
}

// const test1 = [10, 2, 5, 7, 2];
// console.log(bubble_sort(test1));

