//Regular Expression
console.log("---Regular Expression---");
let str = "We will, we will rock you";

let result = str.match(/we/i); // without flag g

console.log(result[0]);     // We (1st match)
console.log(result.length); // 1

// Details:
console.log(result.index);  // 0 (position of the match)
console.log(result.input);  // We will, we will rock you (source string)
