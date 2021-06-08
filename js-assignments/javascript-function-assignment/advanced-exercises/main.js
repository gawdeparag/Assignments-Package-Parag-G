//1. Make a "pure" recursive version of ...... remember the slice method of arrays.
function isEven(num) {
    return (num % 2 === 0);
}
// const find = (arr, func) => {
//     var i = 0
//     var even = []
//     while (i < arr.length) {
//         if (func(arr[i])) {
//             even.push(arr[i]);
//         }
//         // if (arr[i] % 2 === 0) {
//         //     even.push(arr[i])
//         // }
//         ++i;
//         return find(arr, func);
//     };
//     return even
// };
// console.log("Answer 3: ", find([1, 3, 5, 4, 2], isEven));

//2. Make a "pure" recursive version of map. Hint: remember the slice and concat methods of array.
function map(input) {
    var squares = []
    if (!input.length) {
        return squares.sort((a, b) => a - b);
    }
    squares.push(input.pop() ** 2);
    return map(input, squares);
}
console.log(map([1, 2, 3, 4, 5]));
console.log(map([1, 4, 9, 16, 25]));

//3. JavaScript lets you define anonymous ...... but this a very tricky problem.
function square(x) { return x * x };
var outputString = "square is " + square;
console.log(outputString);