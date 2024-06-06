# Intro to JS 👋

Created by Netscape - 1995, Developed by Brandon Eich
JScript created by Microsoft vs JavaScript

Java script was born as livescript

JavaScript was created in the first place for DOM manipulation.

JavaScript (JS) is a lightweight interpreted programming language with first-class functions.

JavaScript and java are **NOT SAME**. The relation between java and js is like car and carpet.

The standards for JavaScript are the ECMAScript Language Specification.

## HTTP

The HTTP request message is sent in **third** part of three-way handshake.

The first line of HTTP request message is called **Request line**

The values GET, POST, HEAD etc are specified in request line of HTTP message

There are two methods which help to **request a response** from a server. Those are GET and POST. In GET method, the client requests data from server. In POST method the client submits data to be processed to the server.

**LET, CONST keywords**

Reassign can be allowed in Var, let and cannot be allowed in const.

**Reassigning**- giving an other value to the variable.

**Redeclaration**- creating a variable again

**Redeclare** cannot be done by **let, const** but done by the **var**.

Reassign can be done by **var**, **let** and not by the **const**

> But const can still be changed why?

```python
const marks = [80,79,90];
marks[1]= 20;
console.log(marks);

```

We are not replacing address of marks but giving it a new value , So this can be possible.

Address cannot be changed in the const.

```python
        const t1 =[ 30,40,50]
        const t2=t1;
        const t3= [30,40,50];
        t1.push(80);
        t2.push(90);
        t3.push(70);
        console.log(t1);
        console.log(t2);
        console.log(t3);
```

In this case

## Scope

In general, life time of a variable defines that area of that variable where it gets the access

let and const both are block scope. Var is called a function scope, But why var is also working?

```python
        {
        var x1= 10;
        let x2=20;
        }
        console.log(x1);
        console.log(x2);
```

var is printed as 10 , but let cannot be printed a 20 . Instead it prints not-defined.

Undefined is a value

Not defined is an error

```python

function driving(age){
             if(age>18){
                 let msg ="eligible";
             }
             else{
                 let msg = "not eligible";
             }
             console.log("you are" +msg);
         }
         driving(20);

```

in this case not defined is the output, // Both are not defined now, because function is more tuffer block.

The lifetime of a JavaScript variable starts when it is declared.

**Hoisting** is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

## Type casting

Implicit coercion

```python
var x1 = 3;
var x2 = "5";
console.log(x1+x2);
console.log(x1-x2);
```

This is operator overloading. The ouput is 35, -2

Here "+" prefers concatenation over addition( because tc39 wrote those protocols to concatenate instead of addition), and "-" has only one option to Subtract

Explicit coercion

```python
var x1 = 3;
var x2 = "5";
console.log(x1+parseint(x2));
console.log(x1+ +x2);
```

[ ] + [ ] will be an empty string "".

null + 5 equals 5

Anything with NaN is NAn

## which is faster and why?

```python
var g1 = 5;
var g2 = "5";
console.log(g1 ==g2);
console.log(g1 ===g2);
```

"==" string converts to the number, allows coercion.

The faster one is "===" with concept of no coercion, and there is only one step.

Variable nmaes, function names should be in camel case.

Class names should be in pascal case

## How to measure code quality

5 pillars

1. Readability- 75%

2. Maintainability- Code Debt

3. Extensiblity- a well coded program should allow and be open for the open changes

4. Testability- Make it easy for the testers

5. Performance - dont sacrifice readability for the performance, execution speed, resource utilization, and scalability.

## Types of functions

Why Functions?

> DRY
> Eliminate code complexity
> Enable reusability
> Allows modular coding
> Parameterization- customized by passing different values into them.

parameter-assigning a value

Arguments are used to call the function

1. Normal Function.

2. Arrow function. - easy implementation

3. Anonymous function

Normal function

```python
function add(a, b) {
    return a + b;
}
```

Longer version of the arrow function

```python
const double = (n) => {// Arrow functions
    return n*2;
};
double(4)
```

short function

```python
const add = (a, b) => a + b;
```

const double

## Copy by value

we use spread operator

data type of the array is object

var q1=[1,2]
var q3=[q1]

## Different for loops

1. for loop
2. for of loop
3. for in loop

### Normal for loop

Important manipulations in for loop are Initialization, Testing, Updation.

```python
 for (expression 1; expression 2; expression 3) {
 // code block to be executed
}
```

Exp 1 is executed (one time) before the execution of the code block.

Exp 2 defines the condition for executing the code block.

Exp 3 is executed (every time) after the code block has been executed.

```python
const marks= [80,90,100,70,60];
// more control
for (let i=0; i<marks.length; i++){
    console.log("Index: ", i, "Mark: ", marks[i]);
}
```

### For of loop
