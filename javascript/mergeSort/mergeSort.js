'use strict';
function mergeSort(array) {
    let n = array.length;
    if (n > 1) {
        // to divid the array in to two halfs
        let mid = n / 2;
        let left = array.slice(0, mid);
        let right = array.slice(mid);
        mergeSort(left);
        mergeSort(right);
        merge(left, right, array);
    }
    return array;
}
function merge(left, right, array) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i = i + 1;
        } else {
            array[k] = right[j];
            j = j + 1;
        }
        k = k + 1;
    }
    while (i < left.length) {
        array[k] = left[i];
        i = i + 1;
        k = k + 1;
    }
    while (j < right.length) {
        array[k] = right[j];
        j = j + 1;
        k = k + 1;
    }
}


let sampleArray = [20, 18, 12, 8, 5, -2];
let test = mergeSort(sampleArray);
console.log(test);

module.exports = mergeSort;
