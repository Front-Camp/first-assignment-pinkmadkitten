/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  const newArray = [];
  arr.forEach((item, index) => {
    if (newArray.length >= 2) {
      return;
    }
    for (let i = index+1; i < arr.length; i++) {
      if (item + arr[i] === base) {
        return newArray.push(item, arr[i]);
      }
    }
  });
  return newArray;
};

export default twoSums;
