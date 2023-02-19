/*
Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.

Input: 
n = 5
A[] = {1, 2, 3, 3, 4}
[a, b] = [1, 2]
Output: 1
Explanation: One possible arrangement is:
{1, 2, 3, 3, 4}. If you return a valid
arrangement, output will be 1.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

const threeWay = function (array, a, b) {
  let partArray = [];

  array.forEach((element) => {
    if (element <= a) {
      partArray.push(element);
    }
  });

  array.forEach((element) => {
    if (element > a && element < b) {
      partArray.push(element);
    }
  });

  array.forEach((element) => {
    if (element >= b) {
      partArray.push(element);
    }
  });

  console.log(partArray);
};

let array = [87, 78, 16, 94];
let a = 36;
let b = 72;

let value = threeWay(array, a, b);

console.log(value);
