/*
 Merge Intervals

 Given an array of intervals where intervals[i] = [starti, endi], 
 merge all overlapping intervals, and return an array of the 
 non-overlapping intervals that cover all the intervals in the 
 input.
 
 Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 */

function mergeIntervals(array) {
  if (!array.length) return array;

  array.sort(function (a, b) {
    return a[0] - b[0];
  });

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][1] >= array[i + 1][0]) {
      array[i][1] = Math.max(array[i][1], array[i + 1][1]);
      array.splice(i + 1, 1);
      i--;
    }
  }
  console.log(array);
}

let array = [
  [1, 3],
  [10, 20],
  [2, 5],
  [4, 8],
];

value = mergeIntervals1(array);
console.log(value);
