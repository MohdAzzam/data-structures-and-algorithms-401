'use strict';
module.exports =function insertShiftArray(arr,value) {
    let middelArray = Math.ceil(arr.length / 2);
    let newArray=[];
    for(let i=0; i<=arr.length;i++){
        if(i < middelArray){
            newArray[i]=arr[i];
        }else if (i> middelArray){
            newArray[i]=arr[i-1];
        }else{
            newArray[i]=value;
        }
    }
    return newArray;

};


