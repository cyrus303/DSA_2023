/*
Palindrome String

Given a string S, check if it is palindrome or not.

Example 1:

Input: S = "abba"
Output: 1
Explanation: S is a palindrome

Example 2:

Input: S = "abc" 
Output: 0
Explanation: S is not a palindrome

Expected Time Complexity: O(Length of S)
Expected Auxiliary Space: O(1)
*/

function isPalindtome(s) {
  console.log(s);
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

S = 'ababa';
console.log(isPalindtome(S));
