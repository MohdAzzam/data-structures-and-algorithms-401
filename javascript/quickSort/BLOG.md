# Merge Sort 

it divide the array from the half 

--------

## Algorithm

declare a method call quickSort take three arg the fisrt one is an array the secound is 0 the last one the index of the last element in array 
decalre a method call partion that take the array it self and the left and right 
Partition the array by setting the position of the pivot value 
then Sort it to the left recarsivly arr left postion-1
then sort it again to the right recarsivly 
inside partition method 
declare a var and set to it the left-1
 set a pivot value as a point of reference
create a variable to track the largest index of numbers lower than the defined pivot
place the value of the pivot location in the middle.

 all numbers smaller than the pivot are on the left, larger on the right.
loop from i = left untill i less than right  
check if arr[i] less than or equal pivot then increase the low with 1 
then call swap method 

inside swap  method 
decalre a temporory arg that hold the pivot
then replace the arr[i] with arr[low]
then make the arr[low] equal to the pivot


-------

### Code 

```
function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right);
        quickSort(arr, left, position - 1);
        quickSort(arr, position + 1, right);
    }
    return arr;
}
function partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low++;
            swap(arr, i, low);
        }
    }
    swap(arr, right, low + 1);
    return low + 1;
}
function swap(arr, i, low) {
    let temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
}


```

--------

#### Trace

![cc26](../assets/cc28.png)

