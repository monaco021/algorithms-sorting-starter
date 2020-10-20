// Implement Insertion Sort

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    ele = list[i];
    for (var j = i -1; j >= 0 && ele < list[j]; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = ele;

  }
  return list;
}

module.exports = {
  insertionSort
};
