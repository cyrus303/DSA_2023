/*
Java Program to Check if a string is a valid shuffle of two distinct strings

Example 1:

input: XY, 12
output: 1XY2 is a valid shuffle of XY and 12

Example 2:

input: XY, 12
output: Y1X2 is a valid shuffle of XY and 12

input: XY, 12
output: Y21XX is not a valid shuffle of XY and 12
*/

function shuffle(str1, str2, strInput) {
  if (str1.length + str2.length !== strInput.length) {
    return false;
  }
  let strFull = str1 + str2;
  strFull = strFull.toLowerCase().split('').sort().join('');
  strInput = strInput.toLowerCase().split('').sort().join('');
  if (strFull === strInput) {
    return true;
  }
  return false;
}

str1 = 'XY';
str2 = '12';
strInput = 'Y1X2';

console.log(shuffle(str1, str2, strInput));
