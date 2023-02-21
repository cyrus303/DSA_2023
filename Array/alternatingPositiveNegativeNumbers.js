/*
Rearrange array in alternating positive & negative items with O(1) extra space

Given an array of positive and negative numbers, arrange them in an alternate 
fashion such that every positive number is followed by a negative and vice-versa 
maintaining the order of appearance. The number of positive and negative numbers 
need not be equal. If there are more positive numbers they appear at the end of 
the array. If there are more negative numbers, they too appear at the end of the 
array.

Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

 */

'use strict';

function alternate(array) {
  let positive = [];
  let negative = [];
  let n = array.length - 1;
  let array1 = [];
  array.forEach((element) => {
    element < 0 ? negative.push(element) : positive.push(element);
  });

  let i = 0;
  while (i <= n) {
    if (i % 2 === 0) {
      array1.push(negative[i]);
    } else {
      array1.push(positive[i]);
    }
    i++;
  }
  console.log(array1);
}

//[ 1, 2, 3, 4 ]
// [ -4, -1 ]

let array = [1, 2, 3, -4, -1, 4];
alternate(array);
