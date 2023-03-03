/*
Triplet Sum in Array

Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and 
nums[i] + nums[j] + nums[k] == 0.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/

function threeSum(array) {
  let result = [];
  let n = array.length;
  array = array.sort((a, b) => a - b);

  for (i = 0; i < n; i++) {
    let a = array[i];
    if (i > 0 && a === array[i - 1]) {
      continue;
    }
    left = i + 1;
    right = n - 1;

    while (left < right) {
      sum = a + array[left] + array[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([a, array[left], array[right]]);
        left++;
        while (array[left] === array[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return result;
}

// let array = [-1, 0, 1, 2, -1, -4];
// result = threeSum(array);
// console.log(result);

function threeSum2(array, target) {
  let count = 0;
  let n = array.length;
  array = array.sort((a, b) => a - b);

  for (i = 0; i < n; i++) {
    let a = array[i];
    if (i > 0 && a === array[i - 1]) {
      continue;
    }
    left = i + 1;
    right = n - 1;

    while (left < right) {
      sum = a + array[left] + array[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return 1;
        // while (array[left] === array[left - 1] && left < right) {
        //   left++;
        // }
      }
    }
  }
  return 0;
}

let array = [1, 4, 45, 6, 10, 8];
target = 45;
result = threeSum2(array);
console.log(result);
