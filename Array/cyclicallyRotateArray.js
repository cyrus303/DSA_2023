/*
Given an array, rotate the array by one position in clock-wise direction.

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
Output:
5 1 2 3 4

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/
'use strict';

function Rotate(arr) {
  let element = arr.pop();
  arr.unshift(element);
  console.log(arr);
}

let arr = [1, 2, 3, 4, 5];
Rotate(arr);
