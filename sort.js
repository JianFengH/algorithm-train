/**
 * pointer to last index as the largest one for ourter loop
 * pointer to first index of unsorted array for inner loop
 * @param {float} input 
 */
export function bubble_sort(input) {
  const re = [].concat(input);
  for (let i = re.length - 1; i > 0; i--) { // sorted 
    for (let j = 0; j < i; j++) { // unsorted
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

/**
 * two sections: 1. sorted list 2. unsorted list
 * one pointer 
 */
export function insertion_sort(input) {
  const re = [].concat(input);
  for (let i = 1, len = re.length; i < len; i++) { // unsorted
    for (let j = 0; j < i; j++) { // sorted
      const t = re[i];
      if (t <= re[j]) { // change position
        for (let m = i; m > j; m--) {
          re[m] = re[m - 1];
        }
        re[j] = t;
        break;
      }
    }
  }
  return re;
}

