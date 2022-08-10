/**
 * pointer to last index as the largest one for ourter loop
 * pointer to first index of unsorted array for inner loop
 * @param {float} input 
 */
export function selection_sort(input) {
  const re = [].concat(input);
  for (let i = re.length - 1; i > 0; i--) { // sorted 
    let max_index = i;
    for (let j = 0; j < i; j++) { // unsorted
      if (re[j] > re[max_index]) {
        max_index = j;
      }
    }
    if (max_index !== i) {
      const t = re[i];
      re[i] = re[max_index];
      re[max_index] = t;
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

/**
 * radix sort:
 * For each digit i where i varies from the least significant digit to the most significant digit of a number, sort input array using countsort algorithm according to ith digit.
 */


/**
 * 
 */
export function quick_sort(input) {
  const re = [].concat(input);
  quickSort(re, 0, re.length - 1);
  return re;
}

const quickSort = (arr, start, end) => {
  if (start < end) {
    // You can learn about how the pivot value is derived in the comments below
    let pivot = partition(arr, start, end);

    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
    // These are the recursive calls to quickSort
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }

}

const partition = (arr, start, end) => {
  let pivot = end;
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
  // Succeeding comments will expound upon the above comment
  let i = start - 1,
    j = start;

  // Increment j up to the index preceding the pivot
  while (j < pivot) {
    // If the value is greater than the pivot increment j
    if (arr[j] > arr[pivot]) {
      j++;
    }
    // When the value at arr[j] is less than the pivot:
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
    else {
      i++;
      swap(arr, j, i);
      j++;
    }
  }

  //The value at arr[i + 1] will be greater than the value of arr[pivot]
  swap(arr, i + 1, pivot);

  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
  return i + 1;
}

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}