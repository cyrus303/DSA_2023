/*

Count pairs with given sum
Given an array of N integers, and an integer K, find the number
of pairs of elements in the array whose sum is equal to K.

Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

Input:
N = 4, K = 2
arr[] = {1, 1, 1, 1}
Output: 6
Explanation: 
Each 1 will produce sum 2 with any 1.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)
*/

//*counter logic

let nums = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
let counter = {};

nums.forEach((element) => {
  counter[element] = (counter[element] || 0) + 1;
});

// console.log(counter);

let counterMap = new Map();
nums.forEach((element) => {
  if (!counterMap.has(element)) {
    counterMap.set(element, 1);
  } else {
    counterMap.set(element, counterMap.get(element) + 1);
  }
});

// console.log(counterMap);

// a[i] + a[i+1] = k

function countPairs(arr, n, k) {
  let counterHash = new Map();
  let pairCount = 0;

  arr.forEach((element) => {
    if (counterHash.has(k - element)) {
      pairCount = pairCount + counterHash.get(k - element);
    }

    if (!counterHash.has(element)) {
      counterHash.set(element, 1);
    } else {
      counterHash.set(element, counterHash.get(element) + 1);
    }
  });

  console.log(pairCount);
}

let nums2 = [1, 5, 7, -1, 5];
let n = nums2.length;
let k = 6;

// countPairs(nums2, n, k);

/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly 
one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


*/

var twoSum = function (arr, k) {
  let counterHash = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = k - arr[i];

    if (counterHash.has(diff)) {
      return [counterHash.get(diff) + 1, i + 1];
    }

    counterHash.set(arr[i], i);
  }

  console.log(counterHash);
};

twoSum(nums2, k);
