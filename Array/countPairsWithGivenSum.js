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

countPairs(nums2, n, k);
