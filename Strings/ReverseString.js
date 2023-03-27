/*
 Reverse String

 Write a function that reverses a string. The input string 
 is given as an array of characters s.
 You must do this by modifying the input array in-place with O(1) extra memory.


 Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

function reverseString(s) {
  //   console.log(s);
  let len = s.length - 1;
  let j = 0;
  let revStr = [];
  for (let i = len; i >= 0; i--) {
    const element = s[i];
    revStr[j] = element;
    j++;
  }
  console.log(revStr);
}

function reverseStr(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  console.log(s);
}

let s = ['h', 'e', 'l', 'l', 'o'];
reverseStr(s);
