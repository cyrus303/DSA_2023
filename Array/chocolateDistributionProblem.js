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

function chocoDistribution(array, students) {
  let n = array.length - 1;
  array = array.sort((a, b) => a - b);
  let windowSize = students;
  console.log(array);

  let left = 0;
  let right = windowSize;
  let windowSum = 0;
  let globalMin = 9999999999;

  while (right <= n + 1) {
    let windowAverage = 0;

    for (i = left; i < right; i++) {
      windowSum += array[i];
      windowAverage = Math.round(windowSum / windowSize);
      console.log(left, right, array[i]);
    }

    globalMin = Math.min(globalMin, windowAverage);
    console.log(`globalMin: ${globalMin}`);
    console.log(`windowAverage:${windowAverage}`);

    left++;
    right++;
    // console.log(windowAverage);
  }
}

let array = [3, 4, 1, 9, 56, 7, 9, 12];
let students = 5;

chocoDistribution(array, students);

console.log(Math.round());
