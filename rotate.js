/*
 Here,
    n = size of array
    d = amount to rotate by
    arr = array to rotate

*/

function rotateLeft(n, d, arr) {
  for (i = 0; i < d; i++) {
    rotateLeftByOne(arr, n);
  }
  console.log(arr);
}

function rotateLeftByOne(arr, n) {
  let temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
}

let arr = [1, 2, 3, 4, 5];
rotateLeft(5, 2, arr);
