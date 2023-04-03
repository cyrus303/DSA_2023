/*
Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

*/

let result = '';
let resultLen = 0;

function checkPalindrome(left, right) {
  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    //   checking if the found palindrome is longer than the previous one
    if (right - left + 1 > resultLen) {
      // update the result
      result = s.slice(left, right + 1);
      // update length
      resultLen = right - left + 1;
    }
    left--;
    right++;
  }
}

function longestPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    // checking for odd length palindrome
    let left = i;
    let right = i;
    checkPalindrome(left, right);
    // checking for even length palindrome
    left = i;
    right = i + 1;
    checkPalindrome(left, right);
  }

  return result;
}

let s = 'aaaaabbaa';
palindrome = longestPalindrome(s);
console.log(palindrome);
