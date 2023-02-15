/*
Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given 
stock on the ith day.

You want to maximize your profit by choosing a single day to buy 
one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
profit = 6-1 = 5.

Note that buying on day 2 and selling on day 1 is not allowed 
because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

function stoinks(prices) {
  let maxSum = 0;
  let n = prices.length;
  let curSum = 0;
  for (let i = 0; i < n; i++) {
    curSum = 0;
    for (let j = i + 1; j < n; j++) {
      if (prices[j] - prices[i] > 0) {
        curSum = prices[j] - prices[i];
      }
      if (curSum > maxSum) {
        maxSum = curSum;
      }
    }
    console.log(`currsum: ${curSum}, maxsum: ${maxSum}`);
  }
  console.log(maxSum);
}
let prices = [7, 1, 5, 3, 6, 4];
// stoinks(prices);

// using 2 pointer method

function stoinks2(prices) {
  let left = 0;
  let right = 1;
  maxProfit = 0;
  n = prices.length;

  while (right < n) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }

  console.log(maxProfit);
}

stoinks2(prices);
