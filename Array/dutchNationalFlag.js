/*
Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. 
The functions should put all 0s first, then all 1s and all 2s in last.

    Input: {0, 1, 2, 0, 1, 2}
    Output: {0, 0, 1, 1, 2, 2}

    Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
    Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}

*/
'use strict';

function dutchProblem(arr) {
  let sortedArr = [];
  let count_0 = [];
  let count_1 = [];
  let count_2 = [];

  arr.forEach((element) => {
    if (element === 0) {
      count_0.push(0);
    } else if (element === 1) {
      count_1.push(1);
    } else {
      count_2.push(2);
    }
  });

  sortedArr = [...count_0, ...count_1, ...count_2];
  console.log(sortedArr);
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
dutchProblem(arr);
