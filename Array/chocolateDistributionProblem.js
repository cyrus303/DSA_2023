/*
Chocolate Distribution Problem

Given an array A[ ] of positive integers of size N, where each 
value represents the number of chocolates in a packet. Each packet 
can have a variable number of chocolates. There are M students, 
the task is to distribute chocolate packets among M students such that :

1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a 
   student and minimum number of chocolates given to a student is minimum.

Input:
N = 8, M = 5
A = {3, 4, 1, 9, 56, 7, 9, 12}
Output: 6
Explanation: The minimum difference between 
maximum chocolates and minimum chocolates 
is 9 - 3 = 6 by choosing following M packets :
{3, 4, 9, 7, 9}.

Input:
N = 7, M = 3
A = {7, 3, 2, 4, 9, 12, 56}
Output: 2
Explanation: The minimum difference between
maximum chocolates and minimum chocolates
is 4 - 2 = 2 by choosing following M packets :
{3, 2, 4}.

Expected Time Complexity: O(N*Log(N))
Expected Auxiliary Space: O(1)
*/

// function chocoDistribution(array, students) {
//   let n = array.length;

//   array = array.sort((a, b) => a - b);
//   console.log(array);
//   let windowSize = students;

//   let left = 0;
//   let right = windowSize - 1;

//   let diff = [];

//   while (right < n) {
//     localDiff = array[right] - array[left];
//     diff.push(localDiff);

//     left++;
//     right++;
//   }
//   console.log(Math.min(...diff));
// }

function chocoDistribution(array, students) {
  let n = array.length;
  let m = students;

  array = array.sort((a, b) => a - b);

  let gloablDiff = Number.MAX_VALUE;

  for (i = 0; i + m - 1 < n; i++) {
    let localDiff = array[i + m - 1] - array[i];

    if (localDiff < gloablDiff) gloablDiff = localDiff;
  }

  console.log(gloablDiff);
}

let array = [7, 3, 2, 4, 9, 12, 56];
let students = 3;

chocoDistribution(array, students);
