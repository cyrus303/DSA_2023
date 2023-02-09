let arr = [10, 1, 6, 12, 63, 34, 9, 90, 2];
low = 0;
high = arr.length;

quickSort(arr, low, high);
console.log(arr);

function quickSort(arr, low, high) {
  if (low < high) {
    j = partition(arr, low, high);
    quickSort(arr, low, j);
    quickSort(arr, j + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
}

// function swap(arr, i, j) {
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
