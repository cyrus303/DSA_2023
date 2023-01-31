/*
Write a program to find the min and max element in an arrray


Examples : 

Input  : arr[] = {1,2,3,5,7,10}
Output : min = 1, max = 10

Input :  arr[] = {4, 5, 1, 2, -10, 200}
Output : min = -10, max = 200
*/

function minMax(array) {
  let min = array[0];
  let max = array[0];

  array.forEach((element) => {
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    }
  });

  console.log(`input array is: ${array}, min = ${min}, max = ${max}`);
}

let array = [1, 20, 12, -22, 8];
minMax(array);
