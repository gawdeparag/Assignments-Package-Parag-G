//1. Write a program that prints "Hello World" to the screen.
var answerOne = document.getElementById("answer-one");
answerOne.innerHTML = "Hello World";

//2. Write a program that asks the user for their name and greets them with their name.
var userName = document.getElementById("user-name");
var greeting = document.getElementById("greeting");

function greetUser() {
    greeting.innerHTML = "Hello " + userName.value + "!";
}

//3. Modify the previous program such that only the users Alice and Bob are greeted with their names.
var specificName = document.getElementById("specific-name");
var greetingAb = document.getElementById("greeting-ab");

function greetAliceAndBob() {
    if (specificName.value === "Alice" || specificName.value === "Bob") {
        greetingAb.innerHTML = "Hello " + specificName.value + "!";
    } else {
        greetingAb.innerHTML = "Try entering Alice or Bob.";
    }
}

//4. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.
function printnNumbers() {
    var num = document.getElementById("num").value;
    var result = '';
    for (i = 1; i <= num; i++) {
        result += i + '</br>';
    }
    document.getElementById("n-numbers").innerHTML = result;
}

//5. Modify the previous programs ...... considered, eg. 3, 5, 6, 9, 10, 12, 15 for n = 17.
function printMultiplesOf3And5() {
    var num = document.getElementById("n").value;
    var result = '';
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i + '</br>';
        }
    }
    document.getElementById("specific-numbers").innerHTML = result;
}

//6. Write a program that asks the ...... computing the product of 1 to n.
function sumNumbersUpton() {
    var number = parseInt(document.getElementById("number-entered").value);
    var sum = (number * (number + 1)) / 2;
    var sumResult = '';
    sumResult += sum + '</br>';
    document.getElementById("sum-product").innerHTML = sumResult;
}

function multiplyNumbersUpton() {
    var number = parseInt(document.getElementById("number-entered").value);
    var multiplyResult = '';
    var product = 1;
    for (j = 1; j <= number; j++) {
        product *= j;
    }
    multiplyResult += product + '</br>';
    document.getElementById("sum-product").innerHTML = multiplyResult;
}

//7. Write a program that prints a multiplication table for numbers upto 12.
function tableUptoTwelve() {
    var number = document.getElementById("number").value;
    var result = '';
    for (i = 1; i < 13; i++) {
        var c = parseInt(number) * parseInt(i);
        result += number + " x " + i + " = " + c + '</br>';
    }
    document.getElementById("multiplication-table").innerHTML = result;
}

//8. Write a program that prints ...... you can easily represent is fine too.)
function primeNumbersUpton() {
    var limit = parseInt(document.getElementById("limit").value);
    var result = '';
    for (let i = 2; i <= limit; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            result += i + '<br/>'
        }
    }
    document.getElementById("prime-nums").innerHTML = result;
}

//9. Write a guessing game where ...... same number multiple times consecutively.


//10. Write a program that prints the next 20 leap years.
var yearsPrinted = 0;
var currentYear = 2021;

function leapYears() {
    var result = "";
    while (yearsPrinted < 20) {
        if ((currentYear % 4 === 0) && (!((currentYear % 100 === 0) && (currentYear % 400 !== 0)))) {
            result += currentYear + "<br/>";
            yearsPrinted++;
            currentYear++;
        } else {
            currentYear++;
        }
    }
    document.getElementById("leap-years").innerHTML = result;
}
leapYears();

//11. Write a function that returns the largest element in a list.
var list = [1, 29, 382, 4854, 85894, 600000];

function largestElementInList() {
    var largestElement = Math.max(...list);
    document.getElementById("list").innerHTML = list;
    document.getElementById("largest-element").innerHTML = largestElement;
}
largestElementInList();

//12. Write a function that reverses a list, preferably in place.
function reversingAlist() {
    var reversedList = list.reverse();
    document.getElementById("reversed-list").innerHTML = reversedList;
}
reversingAlist();

//13. Write a function that checks whether an element occurs in a list.
function whetherElementExists() {
    var doesElementExist = list.includes(2000);
    var elementDoesntExist = list.includes(4854);
    document.getElementById("element").innerHTML = "Does 2000 exists in above list: " + doesElementExist;
    document.getElementById("element-exists").innerHTML = "Does 4854 exists in above list: " + elementDoesntExist;
}
whetherElementExists();

//14. Write a function that returns the elements on odd positions in a list.
var elementsOnOddPosition = '';

function elementsOnOddPositions() {
    for (i = 1; i < list.length; i = i + 2) {
        elementsOnOddPosition += list[i] + "<br/>";
    }
    document.getElementById("odd-elements").innerHTML = elementsOnOddPosition;
}
elementsOnOddPositions();

//15. Write a function that computes the running total of a list.
function runningTotal() {
    var totalOfSum = list.reduce((numOne, numTwo) => numOne + numTwo);
    document.getElementById("total").innerHTML = "Total Sum of list elements: " + totalOfSum;
}
runningTotal();

//16. Write a function that tests whether a string is palindrome.
var string = "Madam";

function checkPalindrome() {
    var reversedString = string.toLowerCase().split("").reverse().join("");
    if (string.toLowerCase() == reversedString) {
        document.getElementById("check-palindrome").innerHTML = "String is Palindrome: " + true;
    } else {
        document.getElementById("check-palindrome").innerHTML = "String is Palindrome: " + false;
    }
}
checkPalindrome();

//17. Write three functions that compute ...... a for-loop, a while-loop and recursion.
var list = [21, 45, 76, 87, 43];

function sumWithForLoop() {
    var totalSumWithForLoop = 0;
    for (i = 0; i < list.length; i++) {
        totalSumWithForLoop += list[i];
    }
    return totalSumWithForLoop;
}
console.log(sumWithForLoop());

function sumWithWhileLoop() {
    var totalSumWithWhileLoop = 0;
    var i = 0;
    while (i < list.length) {
        totalSumWithWhileLoop += list[i];
        i++;
    }
    return totalSumWithWhileLoop;
}
console.log(sumWithWhileLoop());

function sumWithRecursion() {
    if (list.length === 1) {
        return list[0];
    } else {
        return list.pop() + sumWithRecursion(list);
    }
}
console.log(sumWithRecursion());

//18. Write a function on_all that ...... no natural number m so that m*m=12.

//19. Write a function that concatenates two lists.
var list1 = ["a", "b", "c"];
var list2 = [1, 2, 3];
var concatenatedList = list1.concat(list2);
console.log(concatenatedList);

//20. Write a function that combines two lists by alternatingly taking elements.
var array1 = ["a", "b", "c"],
    array2 = [1, 2, 3],
    result = [],
    i, j = Math.min(array1.length, array2.length);
for (i = 0; i < j; i++) {
    result.push(array1[i], array2[i]);
}
result.push(...array1.slice(j), ...array2.slice(j));
console.log(result);

//21. Write a function that merges two sorted lists into a new sorted list.
var list1 = [1, 4, 6];
var list2 = [2, 3, 5];
var concatenatedAndSortedList = list1.concat(list2).sort();
console.log(concatenatedAndSortedList);

//22. Write a function that rotates a list ...... swap or move operations do you need?
var arr = [1, 2, 3, 4, 5, 6];

function arrayRotate(arr) {
    arr.push(arr.shift());
    return arr;
}
for (i = 0; i < 2; i++) {
    arrayRotate(arr);
}
console.log(arr);

//23. Write a function that computes ...... therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
var n1 = 1,
    n2 = 1,
    nextTerm;

function fibonacciSeries(n1, n2) {
    for (i = 1; i <= 100; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
fibonacciSeries(n1, n2);

//24. Write a function that takes a number and returns a list of its digits. So for 2342, it should return [2, 3, 4, 2].
function splittingNumber(number) {
    var numberToStr = number.toString().split('');
    return numberToStr;
}
console.log(splittingNumber(number));