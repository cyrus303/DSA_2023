/*
Split With Minimum Sum

Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

    The concatenation of num1 and num2 is a permutation of num.
        In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
    num1 and num2 can contain leading zeros.

Return the minimum possible sum of num1 and num2.


Example 1:

Input: num = 4325
Output: 59
Explanation: We can split 4325 so that num1 is 24 and num2 is 35, 
giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.

Example 2:

Input: num = 687
Output: 75
Explanation: We can split 687 so that num1 is 68 and num2 is 7, 
which would give an optimal sum of 75.

*/

function splitSum(num) {
  num = num
    .toString()
    .split('')
    .sort((a, b) => a - b);

  let num1 = [];
  let num2 = [];

  for (i = 0; i < num.length; i++) {
    if (i % 2 == 0) {
      num2.push(num[i]);
    } else {
      num1.push(num[i]);
    }
  }
  num1 = Number(num1.join(''));
  num2 = Number(num2.join(''));
  return num1 + num2;
}

let num = 165732;
value = splitSum(num);
console.log(value);
