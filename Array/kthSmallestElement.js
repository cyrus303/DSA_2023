/*
Kth smallest element

Given an array arr[] and an integer K where K is smaller than size of array, 
the task is to find the Kth smallest element in the given array. 
It is given that all array elements are distinct.

input: arr[] = 7 10 4 3 20 15
output: K = 3

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(log(n))

*/

// const smallestELement = (arr, k) => {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   return arr[k - 1];
// };

// let arr = [7, 10, 4, 3, 20, 15];
// k = 3;

// let element = smallestELement(arr, k);
// console.log(`${k}th element in the array is ${element}`);

function smallestELement(arr, k) {
  arr.sort((a, b) => a - b);
  console.log(`${k}th element in the array is ${arr[k - 1]}`);
}

let arr = [7, 10, 4, 3, 20, 15];
k = 3;
smallestELement(arr, k);
