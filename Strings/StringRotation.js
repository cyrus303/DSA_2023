/*
Check if given strings are rotations of each other or not.

Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1. 

Examples: 

    Input: S1 = ABCD, S2 = CDAB
    Output: Strings are rotations of each other

    Input: S1 = ABCD, S2 = ACBD
    Output: Strings are not rotations of each other
*/

function rotation(S1, S2) {
  if (S1.length !== S2.length) {
    console.log(false);
    return;
  }

  S1 = S1 + S1;
  console.log(S1.includes(S2));
}

S1 = 'ABCD';
S2 = 'DABC';

rotation(S1, S2);
