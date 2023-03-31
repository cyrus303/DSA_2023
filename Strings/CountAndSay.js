/*
Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
To determine how you "say" a digit string, split it into the minimal number of substrings
 such that each substring contains exactly one unique digit. Then for each substring, 
 say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

*/

// 3322251

function countAndSay(n) {
  if (n === 1) return '1';
  if (n === 2) return '11';
  let s = '11';
  for (i = 3; i <= n; i++) {
    let temp = '';
    let count = 1;
    for (j = 1; j <= s.length; j++) {
      if (s[j] !== s[j - 1]) {
        temp = temp + count;
        temp = temp + s[j - 1];
        count = 1;
      } else {
        count++;
      }
    }
    s = temp;
  }
  return s;
}

value = countAndSay(10);
console.log(value);
