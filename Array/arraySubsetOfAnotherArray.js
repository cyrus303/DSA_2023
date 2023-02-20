/*
Array Subset of another array

Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. 
Task is to check whether a2[] is a subset of a1[] or not. 
Both the arrays can be sorted or unsorted. 

Input:
a1[] = {11, 1, 13, 21, 3, 7}
a2[] = {11, 3, 7, 1}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Input:
a1[] = {10, 5, 2, 23, 19}
a2[] = {19, 5, 3}
Output:
No
Explanation:
a2[] is not a subset of a1[]

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)
 */

'use strict';

function checkSubset(Array1, Array2) {
  let Array1_Counter = {};
  let subset = true;

  Array1.forEach((element) => {
    Array1_Counter[element] = (Array1_Counter[element] || 0) + 1;
  });

  Array2.forEach((element) => {
    if (!(element in Array1_Counter)) {
      subset = false;
    }
  });

  return subset;
}

let Array1 = [11, 1, 13, 21, 3, 75];
let Array2 = [11, 3, 75, 1];

const value = checkSubset(Array1, Array2);
console.log(value);

/*

fails for multiple element in array 1

For Input: 
8 4
1 2 3 4 5 6 7 8
1 2 3 1
Your Code's output is: 
Yes
It's Correct output is: 
No

*/
