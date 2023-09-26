// Chapter 5 Homework
// isaac morris
// #1 flattening

flatten = function(arrays) {
    console.log(arrays.reduce((a, b) => a.concat(b), []))
    // made into a function for easier testing
}
flatten([[1, 2, 3], [4, 5], [6]]);
// output: [ 1, 2, 3, 4, 5, 6 ]
flatten([["Hello"], ["relatively", "small"], ["world!"]]);
// output: [ 'Hello', 'relatively', 'small', 'world!' ]

// #2 your own loop
loop = function(x, testFunction, updateFunction, bodyFunction) {
    while (testFunction(x)) {
        bodyFunction(x);
        x = updateFunction(x);
}
}
  
loop(3, n => n > 0, n => n - 1, console.log);
// 3
// 2
// 1
loop(7, n => n < 10, n => n + 0.5, console.log);
// 7
// 7.5
// ...
// 9.5

// #3 everything

function every(array, test) {
   for (let i = 0; i <= array.length; test(array[i])) {
    if (test(array[i]) == false) {
        return false;
    } else {
        return true;
    }
  }
}

// should be:
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// but i got it wrong.