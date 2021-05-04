'use strict';

module.exports = function BinarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (key === arr[mid]) {
            return mid;
        }

        if (key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};



