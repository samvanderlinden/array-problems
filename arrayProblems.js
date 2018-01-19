//Write function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order
    //Hint: use a loop
function printReverse(arr) {
    for(var i = arr.length-1; i >=0; i--) {
        console.log(arr[i]);
    }
}

//Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
    //Hint: use a loop, and write a variable that keeps track of 1st array at index (0)

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
    //Hint: use a loop, and write a variable (i.e sum) that stores a value and constantly adds to the next value

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}


//Write a function max() that accepts an array of numbers and returns the maximum number in the array
    //Hint: use a loop, and write a variable that stores the max value

function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}