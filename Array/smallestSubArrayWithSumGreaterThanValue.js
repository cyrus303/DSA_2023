/*
Smallest subarray with sum greater than x

Given an array of integers (A[])  and a number x, find the smallest 
subarray with sum greater than the given value. If such a subarray 
do not exist return 0 in that case.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Example 1:

Input:
A[] = {1, 4, 45, 6, 0, 19}
x  =  51
Output: 3
Explanation:
Minimum length subarray is 
{4, 45, 6}

Example 2:

Input:
A[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1
Explanation:
Minimum length subarray is {10}
*/

function smallestSubArray(array, x_value) {
  let n = array.length;

  // Initialize length of smallest subarray as n+1
  let min_len = n + 1;

  // Pick every element as starting point
  for (start = 0; start < n; start++) {
    // Initialize sum starting with current start
    let currSum = array[start];

    // If first element itself is greater
    if (currSum > x_value) return 1;

    // Try different ending points for curremt start
    for (end = start + 1; end < n; end++) {
      // add last element to current sum
      currSum += array[end];

      // If sum becomes more than x and length of
      // this subarray is smaller than current smallest
      // length, update the smallest length (or result)
      if (currSum > x_value && end - start + 1 < min_len) {
        console.log(`sum: ${currSum}, start: ${start}, end:${end}`);
        min_len = end - start + 1;
      }
    }
  }
  console.log(min_len);
}

function smallestSubArrayOptimised(array, x_value) {
  // Initialize current sum and minimum length
  let n = array.length;
  let min_length = n + 1;
  let currSum = 0;
  // Initialize starting and ending indexes
  let start = 0;
  let end = 0;

  while (end < n) {
    // Keep adding array elements while current sum
    // is smaller than or equal to x
    while (currSum <= x_value && end < n) {
      currSum = currSum + array[end++];
    }
    // If current sum becomes greater than x.
    while (currSum > x_value && start < n) {
      // Update minimum length if needed
      if (end - start + 1 < min_length) {
        min_length = end - start - 1;
      }
      // remove starting elements
      currSum = currSum - array[start++];
    }
  }
  console.log(min_length);
}

let array = [1, 4, 45, 6, 0, 19];
let x_value = 51;

// let value = smallestSubArray(array, x_value);
smallestSubArrayOptimised(array, x_value);
