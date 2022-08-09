import assert from 'assert';
import { bubble_sort, insertion_sort } from '../sort.js';

describe('Sort algorithms', function () {
  const entry = [10, 2, 5, 7, 2];
  const actual = [].concat(entry).sort((a, b) => a - b);

  describe('#bubble_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(bubble_sort(entry).join(), actual.join());
    });
  });

  describe('#insertion_sort()', function () {
    it(`should return sorted array: ${actual}`, function () {
      assert.equal(insertion_sort(entry).join(), actual.join());
    });
  });
})