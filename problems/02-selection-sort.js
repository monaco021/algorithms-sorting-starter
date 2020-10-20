// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  // your code here
}

module.exports = {
  selectionSort,
  swap
};
