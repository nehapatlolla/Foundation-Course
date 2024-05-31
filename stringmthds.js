let str = "hello";
let upperCaseStr = str.toUpperCase(); // Result: 'HELLO'

let str1 = "WORLD";
let lowerCaseStr = str1.toLowerCase(); // Result: 'world'

let str2 = "Hello";
let char = str2.charAt(0); // Result: 'H'

let str3 = "Hello, world!";
let index3 = str3.indexOf("world"); // Result: 7

let str4 = "Hello, world!";
let index4 = str4.indexOf("world"); // Result: 7

let str5 = "Hello, world!";
let startsWithHello = str5.startsWith("Hello"); // Result: true

let str6 = "Hello, world!";
let endsWithWorld = str6.endsWith("world!"); // Result: true

let str7 = "Hello, world!";
let containsWorld = str7.includes("world"); // Result: true

let str8 = "apple,banana,orange";
let fruits = str8.split(","); // Result: ['apple', 'banana', 'orange']

let str9 = "Hello, world!";
let slicedStr = str9.slice(7, 12); // Result: 'world'

// Task 6

function transformSentence(sentence) {
  return sentence.split(" ").reverse().join(" ").toUpperCase(" ");
  // Your code hee
}

let sentence = "Hello world from JavaScript";
let transformed = transformSentence(sentence);
console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"

// Task 7: Improving code quality

/*
function processNames(names) {
    let result = [];
    for (let i = 0; i < names.length; i++) {
      let upperCaseName = names[i].toUpperCase();
      let nameParts = upperCaseName.split(" ");
      let joinedName = nameParts.join("_");
      result.push(joinedName);
    }
    return result;
  }
  
  const namesArray = ["john doe", "jane smith", "alice jones"];
  console.log(processNames(namesArray));*/

function processNames(names) {
    let result = [];
    for (let name of names) {
      result.push(name.toUpperCase().split(" ").join("_"));
    }
    return result;
  }
  
  const namesArray = ["john doe", "jane smith", "alice jones"];
  console.log(processNames(namesArray));

/*
function processNames(names) {
  return names.map((names) => names.toUpperCase().split(" ").join("_"));
}
const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames(namesArray));*/

