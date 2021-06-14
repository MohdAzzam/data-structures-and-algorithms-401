# Merge Sort 

it divide the array from the half 

--------

## Algorithm 
1. mergeSort method take an array 
2. declare n as array.length/2 
3. check if then greater than  one 
4. decaler left and right that holding the left and the right of the array element 
5. then call the mergeSort with the left again recarsivly when finish 
6. then call the mergeSort with the right  again recarsivly 
7. call the merge method that take left and right and the array 
8. inside the merge method 
9. decaler i ,j and k with zero at the begining 
10. loop until thr i less than left.length and j less than right.length 
    then check if the left[i] less than or equal the right[i]
    then increase the i with one 
    other wise make the array[k] = right[j]
    then increase the j with one 
    after that  increase the k with one 

11. then loop over the i until the i less than the left.length 
    increase the i and the k 
12. then loop over the i until the i less than the right.length increase the i and the k 

-------

### Code 

```

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


```

--------

#### Trace

![cc26](../assets/cc28.png)

