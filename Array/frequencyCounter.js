/*
Write a program to Count number of occurrences (or frequency) in a sorted array

Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

Examples : 

Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
  Output: 4 // x (or 2) occurs 4 times in arr[]

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
  Output: 1 

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
  Output: 2  

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
  Output: -1 // 4 doesn't occur in arr[] 
*/

function frequencyCounter(array, n) {
  let counter = 0;
  array.forEach((element) => {
    if (element === n) {
      counter++;
    }
  });
  if (counter === 0) {
    console.log(`-1.`);
  } else {
    console.log(` ${counter}.`);
  }
}

array = [1, 1, 2, 2, 2, 2, 3];
n = 3;
frequencyCounter(array, n);

//Write a program to Count number of occurrences (or frequency) in a sorted array
