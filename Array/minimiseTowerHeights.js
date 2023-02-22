/*
https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1

Minimize the Heights II

Given an array arr[] denoting heights of N towers and a 
positive integer K.

For each tower, you must perform exactly one of the following 
operations exactly once.

    Increase the height of the tower by K
    Decrease the height of the tower by K

Find out the minimum possible difference between the height 
of the shortest and tallest towers after you have modified 
each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height 
by K for each tower. After the operation, the resultant 
array should not contain any negative integers.


Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.

Example 2:

Input:
K = 3, N = 5
Arr[] = {3, 9, 12, 16, 20}
Output:
11
Explanation:
The array can be modified as
{6, 12, 9, 13, 17}. The difference between 
the largest and the smallest is 17-6 = 11. 

Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(N)

*/

function heights(array, K, N) {
  array = array.sort((a, b) => a - b);
  let mid = Math.ceil((N - 1) / 2);

  console.log(`array before modifications ${array}`);

  array.forEach((element, index) => {
    if (index < mid) {
      array[index] = element + K;
    } else if (index >= mid) {
      if (element > K) {
        array[index] = element - K;
      } else {
        array[index] = element + K;
      }
    }
  });

  console.log(`array after modifications ${array}`);
  let max = Math.max(...array);
  let min = Math.min(...array);

  return max - min;
}

function heights2(array, k, n) {
  array = array.sort((a, b) => a - b);

  globalAns = array[n - 1] - array[0];

  tempMin = array[0];
  tempMax = array[n - 1];

  for (i = 1; i < n; i++) {
    tempMin = Math.min(array[0] + k, array[i] - k);
    tempMax = Math.max(array[i - 1] + k, array[n - 1] - k);

    globalAns = Math.min(globalAns, tempMax - tempMin);
  }

  return globalAns;
}

let array = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1];
let K = 5;
let N = 10;

let diff = heights2(array, K, N);
console.log(diff);
