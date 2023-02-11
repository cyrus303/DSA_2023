/*
Maximum Subarray Sum: Kadane’s Algorithm

 */

//brute force approach
function Kadane(arr) {
  let maxSum = 0;
  let currSum = 0;
  let n = arr.length - 1;

  for (i = 0; i <= n; i++) {
    for (j = i; j <= n; j++) {
      currSum = currSum + arr[j];

      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
    currSum = 0;
  }
  console.log(maxSum);
}

let input = [-3, -4, 5, -1, 2, -4, 6, -1];
// Kadane(input);

//kadane approach

function kadane2(arr) {
  let n = arr.length - 1;
  let globalMax = Number.MIN_VALUE;
  let localMax = 0;

  for (let i = 0; i < n; i++) {
    localMax = Math.max(arr[i], arr[i] + localMax);

    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  console.log(globalMax);
}

kadane2(input);
