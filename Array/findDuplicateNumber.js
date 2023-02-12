/*
Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each 
integer is in the range [1, n] inclusive.
There is only one repeated number in nums, 
return this repeated number.
You must solve the problem without modifying the 
array nums and uses only constant extra space.


Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3
*/

'use strict';

function duplicate(nums) {
  let numsCount = {};

  nums.forEach((element) => {
    if (!numsCount[element]) {
      numsCount[element] = 1;
    } else {
      console.log(element);
    }
  });
}

let nums = [3, 1, 0, 4, 2, 5, 6, 7, 8, 0];
duplicate(nums);

//   let numsCount = {};

//   nums.forEach((element) => {
//     numsCount[element] = (numsCount[element] || 0) + 1;
//   });

//   let duplicateValue = Object.keys(numsCount).find((key) => numsCount[key] > 1);

//   console.log(duplicateValue);
