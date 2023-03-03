/*
Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length 
of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements 
             sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/
// brute force
// const longestConsecutive = function (nums) {
//   let count = 0;
//   let glbCount = 0;
//   let n = nums.length;
//   nums = nums.sort((a, b) => a - b);
//   console.log(nums);

//   for (i = 1; i <= n; i++) {
//     if (nums[i] - nums[i - 1] == 1 || nums[i] === nums[i - 1]) {
//       count++;
//       glbCount = count;
//     } else {
//       count = 0;
//     }
//   }
//   return glbCount;
// };

function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let longest = 0;

  nums.forEach((element) => {
    if (!numSet.has(element - 1)) {
      length = 0;
      while (numSet.has(element + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  });

  return longest;
}

let nums = [100, 4, 200, 1, 3, 2];
let value = longestConsecutive(nums);

console.log(value);
