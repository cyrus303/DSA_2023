/*
Move all negative numbers to beginning and positive to end with constant extra space

An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5

*/

function negativeNumber(arr) {
  let n = arr.length;
  let i = -1;
  let j = n;

  while (i < j) {
    do {
      i++;
    } while (arr[i] < 0);

    do {
      j--;
    } while (arr[j] > 0);

    if (i < j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  return arr;
}

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
groupedArray = negativeNumber(arr);
console.log(groupedArray);
