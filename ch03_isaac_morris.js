/*
isaac morris
chapter 3
*/

// #1 Minimum
// the function can accept any amount of numbers, not just two
const min = function(variable) {
    while (variable.length > 1) {
        if (variable[0] > variable[1]) {
            variable = variable.slice(1);
        } else if (variable[0] < variable[1]) {
            variable.push(variable[0]);
            //.push modifies the original array
            variable = variable.slice(2);
            //.slice creates a new array
            //that is why i had to reassign variable for slice but not push
        } else if (variable[0] == variable[1]) {
            variable = variable.slice(1);
        } else {
            return
        }
    } if (variable.length == 1) {
        console.log(variable)
    } else {
        return
    }
}

/*
This function uses chapter four concepts to "cycle" and remove
numbers until the smallest one is left. If the first number 
is larger than the second, it gets sliced. If the second number
is larger than the first, a copy of it is pushed to the end
before it gets sliced.
*/

// examples:
min([3,6,10])
// -> [ 3 ]
min([-10,-3,4,100])
// -> [ -10 ]
min([])
// -> 
min([20,20])
// -> 20

// #2 Recursion
let isEven = function(n) {
    if (n > 1) {
       n = n - 2;
       isEven(n);
    } else if (n == 1) {
        console.log(false)
    } else if (n == 0) {
        console.log(true)
    } else {
        console.log("??")
    }
}

// examples:
isEven(10)
// -> true
isEven(9)
// -> false
isEven(11)
// -> false
isEven(44)
// -> true
isEven(-10)
// -> ??

// revised solution
// this other method accepts negative numbers

function isEven (x) {
    if (x == 1) {return false;} 
    else if (x == 0) {return true;}
    else if (x === undefined) {
      return "Please give a real number."}
    else {
      if (x < 0) {return isEven(x + 2)}
      else return isEven(x - 2);
    }
  }
  
  console.log(isEven());
  // -> 'Please give a real number.'
  console.log(isEven(75));
  // -> false
  console.log(isEven(102));
  // -> true
  console.log(isEven(-14));
  // -> true
  console.log(isEven(-73));
  // -> false

// #3 Bean Counting
countBs = function(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] == "b" || string[i] == "B") {
            counter = counter + 1;
        }
    }
    return console.log(counter)
}

countBs("Billy behaved at the beach.")
// -> 3
countBs("back in business")
// -> 2

countChar = function(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] == letter) {
            counter = counter + 1;
        }
    }
    return console.log(counter)
}

// examples:
countChar("funky fishes flying far", "f")
// -> 4
countChar("thissssss issssss a lot of sssss", "s")
// -> 17