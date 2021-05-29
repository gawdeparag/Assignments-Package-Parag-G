//7. Try the “more powerful practice” approach …... and call the new function. 
function helloJS() {
    console.log("Hello, JavaScript!");
}

function sumOfNums(numOne, numTwo) {
    return numOne + numTwo;
}

//8. Write a function called isEven that …... so you cannot use either one.
function isEven(num) {
    if (num) {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Argument Not Found!";
    }
}