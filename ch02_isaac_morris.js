// isaac morris
// chapter 2

// #1 looping a triangle
let line = "#";
while (line.length <= 7) {
    console.log(line);
    line += "#" ;
}

// revisited solution
for (let i = "#"; i.length <= 7; i += "#") {
    console.log(i);
}

// #2 "FizzBuzz"
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

// revisited solution
for (let i = 1; i <= 100; i++) {
    let output = ((i % 3 == 0) ? "Fizz" : "") + ((i % 5 == 0) ? "Buzz" : "");
    console.log(output || i);
  }
/*
I cannot take credit for all of this. I wanted to write the solution
to include the ? : operator. The function I wrote was:

for (let i = 1; i <= 100; i++) {
  console.log(((i % 3 == 0) ? "Fizz" : "") + ((i % 5 ==0) ? "Buzz" : ""));
}

the problem was i was not replaced with Fizz or Buzz or FizzBuzz.
Otherwise, it worked. ChatGPT gave me the solution to include 
console.log(output || i); (as well as making the first line a declaration).
The || checks if output is true, if it has a value, it is. If it has no value,
no value equates to false; it then prints i. Turns out, this was closer to
the textbook's solution.

I am still proud of being able to use ?: even though I needed help solving
it completely.
*/

// #3 chessboard
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

// revised solution

const ideal = 8;
let lineCount = 0;
while (lineCount < ideal) {
  for (i = (lineCount % 2 == 0) ? " " : "#"; i.length < ideal; i += (i.endsWith(" ")) ? "#" : " ") {

} console.log(i);
  lineCount++;
}

/* 
credit to scaler.com for teaching 
me how to select last character 
with .endsWith()
*/





