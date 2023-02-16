function kadane(arr) {
  let currSum = 0;
  let n = arr.length - 1;
  let zeroSum = false;

  for (i = 0; i <= n; i++) {
    for (j = i; j <= n; j++) {
      currSum = currSum + arr[j];

      if (currSum === 0) {
        zeroSum = true;
      }
    }
    currSum = 0;
  }
  //   console.log(zeroSum);
}

array = [4, 2, -3, 1, 6];

// kadane(array);

function zeroSum(arr) {
  let sumHash = new Set();
  let zero = false;
  let sum = 0;

  //   for (i = 0; i < arr.length; i++) {
  //     sum = sum + arr[i];

  //     if (sum === 0 || sumHash.has(sum)) {
  //       return true;
  //     }

  //     sumHash.add(sum);
  //   }

  arr.forEach((element) => {
    console.log(element);
    sum = sum + element;

    if (sum === 0 || sumHash.has(sum)) {
      zero = true;
    }
    sumHash.add(sum);
  });

  return zero;
}

let value = zeroSum(array);
console.log(`zero sum exists: ${value}`);
