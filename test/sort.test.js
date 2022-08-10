import assert from 'assert';
import { bubble_sort, selection_sort, insertion_sort, insertion_sort2, merge_sort, quick_sort } from '../sort.js';

describe('Sort algorithms', function () {
  const entry = [10, 2, 5, 7, 2];
  const actual = [].concat(entry).sort((a, b) => a - b);

  describe('#selection_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(selection_sort(entry).join(), actual.join());
    });
  });

  describe('#insertion_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(insertion_sort(entry).join(), actual.join());
    });
  });

  describe('#insertion_sort2()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(insertion_sort2(entry).join(), actual.join());
    });
  });

  describe('#bubble_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(bubble_sort(entry).join(), actual.join());
    });
  });

  describe('#merge_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(merge_sort(entry).join(), actual.join());
    });
  });

  describe('#quick_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(quick_sort(entry).join(), actual.join());
    });
  });
})