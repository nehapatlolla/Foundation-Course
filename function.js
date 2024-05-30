console.log("hey from functions");
//function
function double(n){
    return n*2;
}
console.log(double(10));
//2 ways to exit the function
//1.return
//2.

function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);

function calcAddition(number1, number2) { 
    return number1 + number2; 
}
console.log(calcAddition(6,9));


const double1 = (n) => {// Arrow functions
    return n*2;
};
double1(4)

function sum(a,b){
    return a+b;
}
sum(5,10);

const sum1 = (a,b) => a+b;

const a = ["Hi", "Hello", "wow", "chill"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]


// DRY : Thumb rule-- Dont repeat yourself