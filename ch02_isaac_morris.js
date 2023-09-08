// isaac morris
// chapter 2

// looping a triangle
let line = "#";
while (line.length <= 7) {
    console.log(line);
    line += "#" ;
}

// "FizzBuzz"
let num = 0;
while (num < 100) {
    num += 1;
     if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
     } else if (num % 3 == 0) {
            console.log("Fizz");
        } else if (num % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(num);
}
}

// chessboard
function chessboard(size) {

let lineCount = 0;
charOne = "#";
charTwo = " ";
sequenceOne = charOne + charTwo
sequenceTwo = charTwo + charOne

function sOne(size) {
    if (size & 2 !== 0) {
        size = size - 1;
        console.log(sequenceOne.repeat(size/2) + "#");
    } else {
        console.log(sequenceOne.repeat(size/2));
    }
    }
    function sTwo(size) {
        if (size & 2 !== 0) {
            size = size - 1;
            console.log(sequenceTwo.repeat(size/2) + " ");
        } else {
            console.log(sequenceTwo.repeat(size/2));
        }
        }

while (lineCount < size) {
    sOne(size);
    lineCount += 1;
    if (lineCount == size) {
        break
    } else {
    sTwo(size);
    lineCount += 1;
    }
}
}

chessboard(12)






