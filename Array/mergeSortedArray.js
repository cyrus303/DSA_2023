/*
Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in 
non-decreasing order, and two integers m and n, representing 
the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6].

Can you come up with an algorithm that runs in O(m + n) time?
*/

function mergeArray(nums1, nums2, m, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  sorted = [];

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      sorted[k] = nums1[i];
      i--;
      k--;
    } else {
      sorted[k] = nums2[j];
      j--;
      k--;
    }
  }

  while (j >= 0) {
    sorted[k] = nums2[j];
    j--;
    k--;
  }

  while (i >= 0) {
    sorted[k] = nums1[i];
    i--;
    k--;
  }
  console.log(sorted);
}

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

mergeArray(nums1, nums2, m, n);
