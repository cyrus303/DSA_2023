/*
https://leetcode.com/problems/next-permutation/

Next Permutation

A permutation of an array of integers is an arrangement of its 
members into a sequence or linear order.

    For example, for arr = [1,2,3], the following are all the 
    permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next 
lexicographically greater permutation of its integer. More 
formally, if all the permutations of the array are sorted in 
one container according to their lexicographical order, then 
the next permutation of that array is the permutation that follows 
it in the sorted container. If such arrangement is not possible, 
the array must be rearranged as the lowest possible order 
(i.e., sorted in ascending order).

    For example, the next permutation of arr = [1,2,3] is [1,3,2].
    Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
    While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.

*In other words

Say we want to find all the different ways we can arrange the numbers in this array: [1,2,3]
These possibilities are:

[1,2,3]
[1,3,2]
[2,1,3]
[2,3,1]
[3,1,2]
[3,2,1]

If you have seen this method of tracking all possible combinations, then this question is just asking:
"If you are given an array that could be at any stage during this process, what is the array's next stage?"

The above list is in order, so you only need to look to the next line to see what its next stage is.
If you are given the array at the last stage, then you should just return the first stage as the next.

 */

function nextPermutation(array) {
  let n = array.length - 1;
  let nonDecreasingIndex = -1;

  for (i = n; i >= 0; i--) {
    if (array[i] > array[i - 1]) {
      nonDecreasingIndex = i - 1;
      break;
    }
  }

  value = array[nonDecreasingIndex];

  for (i = nonDecreasingIndex + 1; i <= n; i++) {
    if (array[i] > value) {
      temp = array[nonDecreasingIndex];
      array[nonDecreasingIndex] = array[i];
      array[i] = temp;
    }
    break;
  }

  const reversedEnd = [
    ...array.slice(0, nonDecreasingIndex + 1),
    ...array.slice(nonDecreasingIndex + 1).reverse(),
  ];

  console.log(reversedEnd);
}

let nums = [3, 2, 1];
nextPermutation(nums);
