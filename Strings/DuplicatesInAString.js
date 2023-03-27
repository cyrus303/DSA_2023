/*
Print all the duplicates in the input string

Write an efficient program to print all the duplicates and their counts in the input string 

input: 'test string'
output: s, count = 2
        t, count = 3

*/

function duplicates(S) {
  let counter = {};
  S = S.replaceAll(' ', '');
  arr = S.split('');

  arr.forEach((element) => {
    counter[element] = (counter[element] || 0) + 1;
  });

  //   Object.entries(counter).forEach(([key, value]) => {
  //     if (value > 1) {
  //       console.log(`key: ${key}, count: ${value}`);
  //     }
  //   });

  Object.keys(counter).forEach((key) => {
    if (counter[key] > 1) {
      console.log(`key:${key}, value:${counter[key]}`);
    }
  });
}

let S = 'test string';
duplicates(S);
