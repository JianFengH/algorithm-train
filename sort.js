/**
 * pointer to last index as the largest one for ourter loop
 * pointer to first index of unsorted array for inner loop
 * @param {float} input 
 */
export function selection_sort(input) {
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
// console.log(selection_sort(test1));

/**
 * two sections: 1. sorted list 2. unsorted list
 * one pointer 
 */
export function insertion_sort(input) {
  const re = [].concat(input);
  for (let i = 1, len = re.length; i < len; i++) { // unsorted
    const t = re[i];
    if (t >= re[i - 1]) {
      continue;
    }
    for (let j = 0; j < i; j++) { // sorted
      if (t <= re[j]) { // it is the postion to insert
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

export function insertion_sort2(input) {
  const re = [].concat(input);
  const len = re.length;
  let i = 1;
  while (i < len) {
    let key = re[i];
    let j = i - 1;
    while (j >= 0 && re[j] > key) {
      re[j + 1] = re[j];
      j = j - 1;
    }
    re[j + 1] = key;
    i++;
  }
  return re;
}

export function bubble_sort(input) {
  const re = [].concat(input);
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let j = 0, len = re.length; j < len - 1; j++) {
      if (re[j] > re[j + 1]) {
        const t = re[j];
        re[j] = re[j + 1];
        re[j + 1] = t;
        swaped = true;
      }
    }
  }
  return re;
}

/**
 * bucket sort:
 * Bucket sort is a comparison sort algorithm that operates on elements by dividing them into different buckets and then sorting these buckets individually. 
 * Each bucket is sorted individually using a separate sorting algorithm like insertion sort, or by applying the bucket sort algorithm recursively.
 */

/**
 * counting sort:
 * The counting sort algorithm works by first creating a list of the counts or occurrences of each unique value in the list. 
 * It then creates a final sorted list based on the list of counts.
 */

/**
 * divide and conquer:
 *  Divide the array into two halves.
 *  Sort the left half and the right half using the same recurring algorithm.
 *  Merge the sorted halves.
 */
export function merge_sort(input) {
  return _merge_sort(input);
}

function _merge_sort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let subLeft = _merge_sort(arr.slice(0, mid));
  let subRight = _merge_sort(arr.slice(mid));
  return _merge(subLeft, subRight);
}

function _merge(a, b) {
  let result = [];
  while (a.length > 0 && b.length > 0) {
    result.push(a[0] < b[0] ? a.shift() : b.shift());
  }
  return result.concat(a.length ? a : b);
}