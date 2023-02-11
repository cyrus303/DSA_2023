/*
*Minimum number of jumps

Given an array of N integers arr[] where each element represents the 
maximum length of the jump that can be made forward from that element. 
This means if arr[i] = x, then we can jump any distance y such that y ≤ x.

Find the minimum number of jumps to reach the end of the array
(starting from the first element). If an element is 0, 
then you cannot move through that element.

Note: Return -1 if you can't reach the end of the array.

Input:
N = 11 
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
Output: 3 
Explanation: 
First jump from 1st element to 2nd 
element with value 3. Now, from here 
we jump to 5th element with value 9, 
and from here we will jump to the last. 

*Expected Time Complexity: O(N)
Expected Space Complexity: O(1)

 */
// 'use strict';

let N = 5;

function jump(arr, N) {
  goal = N - 1;

  for (i = N - 1; i >= 0; i--) {
    console.log(`i: ${i}, arr[i]: ${arr[i]}`);
    if (i + arr[i] >= goal) {
      console.log('entred if');
      goal = i;
    }
  }

  console.log(goal);
  console.log((final = goal === 0 ? true : false));
}

// jump(arr, N);
let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8];

function jump2(arr) {
  res = 0;
  l = r = 0;

  while (r < arr.length - 1) {
    farthest = 0;
    for (i = l; i < r + 1; i++) {
      farthest = Math.max(farthest, i + arr[i]);
    }
    l = r + 1;
    r = farthest;
    res++;
  }

  console.log(res);
}

jump2(arr);
