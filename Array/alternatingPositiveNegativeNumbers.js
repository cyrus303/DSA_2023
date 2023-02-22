/*
Rearrange array in alternating positive & negative items with O(1) extra space

Given an array of positive and negative numbers, arrange them in an alternate 
fashion such that every positive number is followed by a negative and vice-versa 
maintaining the order of appearance. 

Input:  arr[] = {1, -2, 3, -4, -1, 4}
Output: arr[] = {1, -2, 3, -4, 4, -1}

Input:  arr[] = {-5, -2, 5, 2, -4, 7, -1, 8, 0, -8}
Output: arr[] = {5, -5,  2, -2,  7, -4,  8, -1,  0, -8}

 */

'use strict';

function alternate(array) {
  let answer = [];
  let pi = 0;
  let ni = 1;
  let n = array.length - 1;

  array.forEach((element) => {
    if (element >= 0) {
      answer[pi] = element;
      if (pi <= n) {
        pi += 2;
      }
    } else {
      answer[ni] = element;
      ni += 2;
    }
  });
  console.log(answer);
}

//[ 1, 2, 3, 4 ]
// [ -4, -1 ]

let array = [-5, -2, 5, 2, -4, 7, -1, 8, 0, -8];
alternate(array);
