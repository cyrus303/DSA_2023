function arrayUnion(arr1, arr2) {
  unionArr = [...arr1, ...arr2];
  //   console.log(...new Set(unionArr));
  unique = [];
  unionArr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  console.log(unique);
}

arr1 = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 9, 0];
arr2 = [3, 4, 5, 6, 7, 8, 9];

// arrayUnion(arr1, arr2);

function arrUnion(arr1, arr2) {
  n = arr1.length - 1;
  m = arr2.length - 1;

  min = n < m ? n : m;
  var set = new Set();
  for (i = 0; i < min; i++) {
    set.add(arr1[i]);
    set.add(arr2[i]);
  }

  if (n > m) {
    for (i = n; i < m; i++) {
      set.add(arr[i]);
    }
  } else {
    for (i = m; i < n; i++) {
      set.add(arr[i]);
    }
  }

  set.forEach((element) => console.log(element));
  console.log(` count is: ${set.size}`);
}

arrUnion(arr1, arr2);
