/*
Common elements

Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
Note: can you take care of the duplicates without using any additional Data Structure?

Example 1:

Input:
n1 = 6; A = {1, 5, 10, 20, 40, 80}
n2 = 5; B = {6, 7, 20, 80, 100}
n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20 80
Explanation: 20 and 80 are the only
common elements in A, B and C.

Expected Time Complexity: O(n1 + n2 + n3)
Expected Auxiliary Space: O(n1 + n2 + n3)

*/

function commonElements(A, B, C) {
  let count = {};

  let D = [...new Set(A), ...new Set(B), ...new Set(C)];

  D.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });

  let keys = Object.keys(count).filter((k) => count[k] === 3);

  console.log(keys);
}

let A = [1, 5, 10, 20, 20, 40, 80];
let B = [6, 7, 20, 80, 100];
let C = [3, 4, 15, 20, 3, 3, 3, 3, 3, 3, 3, 3, 30, 70, 80, 120];

commonElements(A, B, C);
