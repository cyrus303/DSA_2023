/*
Maximum Product Subarray

Given an array Arr[] that contains N integers (may be positive, 
negative or zero). Find the product of the maximum product subarray.

Example 1:

Input:
N = 5
Arr[] = {6, -3, -10, 0, 2}
Output: 180
Explanation: Subarray with maximum product
is [6, -3, -10] which gives product as 180.

Example 2:

Input:
N = 6
Arr[] = {2, 3, 4, 5, -1, 0}
Output: 120
Explanation: Subarray with maximum product
is [2, 3, 4, 5] which gives product as 120.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/

function maxProductBF(arr, n) {
  let maxProduct = 0;
  let currProduct = 1;

  for (let i = 0; i < n; i++) {
    currProduct = 1;
    for (let j = i; j < n; j++) {
      currProduct = currProduct * arr[j];

      if (currProduct > maxProduct) {
        maxProduct = currProduct;
      }
    }
  }

  return maxProduct;
}

function maxProduct(nums) {
  let result = nums[0];
  let currMax = nums[0];
  let currMin = nums[0];

  for (i = 1; i < nums.length; i++) {
    let localMax = Math.max(currMax * nums[i], nums[i], currMin * nums[i]);
    let localMin = Math.min(currMax * nums[i], nums[i], currMin * nums[i]);

    currMax = Math.max(localMax, localMin);
    currMin = Math.min(localMax, localMin);

    result = Math.max(result, currMax);
  }

  return result;
}

let array = [6, -3, -10, 0, 2];
let N = 5;

let value = maxProduct(array, N);
console.log(value);
