/*
Write a program to reverse an array or string

Given an array (or string), the task is to reverse the array/string.

Examples : 

Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/
function arrayReversal(arr) {
  arr2 = [];
  count = 0;
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    if (count < arr.length) {
      arr2[count] = element;
      count++;
    }
  }
  console.log(`input array: ${arr}
  output array: ${arr2}`);
}

// arrayReversal([1, 2, 3, 4, 5]);

function arrrayReversal2(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp;

  console.log(start, end);

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log(arr);
}

arrrayReversal2([1, 2, 3, 4, 5]);
