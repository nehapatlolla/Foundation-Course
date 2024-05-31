# HTML🩻

![alt text](example.png)

Hypertext Markup Language- defines the meaning and structure of web content

"Hypertext" refers to links that connect web pages to one another

"markup" to annotate text, images, and other content for display in a Web browser.

HTML consists of a series of **elements**, which you use to enclose.

## Anatomy of Html element

![Anatomy of HTML element](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png)

Attributes contain extra information about the element that you don't want to appear in the actual content.

You can put elements inside other elements too — this is called nesting.

## Void Elements

A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.

```$$

<area>
<base>
<br>
<col>
<embed>
<hr>
<img>
<input>
<link>
<meta>
<param>
<source>
<track>
<wbr>
```

[**Anatomy of a html doc**](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document)

## Images

```python
<img src="images/firefox-icon.png" alt="My test image" />
```

1.src (source) attribute, which contains the path to our image file.

2.alt (alternative) attribute specify descriptive text for users who cannot see the image, [SEO](https://searchengineland.com/guide/what-is-seo) purposes.

## Headings

HTML contains 6 heading levels, h1 to h6

```python
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

## Paragraphs

```python
<p>This is a single paragraph</p>
```

# Style HTML using CSS 😎

**Cascading Style Sheets** — or CSS. CSS is not a programming language, is a _style sheet language_.

You can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.

```python
p {
  color: red;
}

```

![Anatomy of a CSS ruleset](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)

This whole structure is called as ruleset.

     1.Apart from the selector, each ruleset must be wrapped in curly braces. ({})

    2.Within each declaration, you must use a colon (:) to separate the property from its value or values.

    3.Within each ruleset, you must use a semicolon (;) to separate each declaration from the next one.

## [Different types of selectors](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#different_types_of_selectors)

Element selector (sometimes called a tag or type selector)- p
selects < p >

Class selector The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page.

```python
.my-class
selects <p class="my-class"> and <a class="my-class">
```

CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:

**padding**, the space around the content.

**border**, the solid line that is just outside the padding.

**margin**, the space around the outside of the border.

[Positioning and styling the main page title](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#positioning_and_styling_the_main_page_title)

[Centering the image](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#centering_the_image)

![image](browser.png)

[Mdn cheatsheet](https://www.datacamp.com/cheat-sheet/markdown-cheat-sheet-23)

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

## How to measure code quality'

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

### Object methods

```python
// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);
```

### template literal

We use template literal removing +, = with $ and { }

This is called as interpolation

## refactoring

Adding new features, quality will be better, functionality is same.

Manager wont be happy with the refactoring because that wont be any changes .

Whenever the colours are faded out then it says we are not using that particular keywords. then use the interpolation

`http://${domain}?genre=${genre}&year=${year}`;
//return "http://" + domain + "?genere=" + genre + "&year=" + year;

### Array Destructuring

Unpacking the values from the array

```python
**const [t1, t2, t3=80]= [100, 200]; // declaring the value
console.log(t1, t2, t3);//100, 200, 80**
```

t3=80 is called as default value and it is only taken when it is undefined

```python

const [t1, t2, t3=80]= [100, 200,300]; // declaring the value
console.log(t1, t2, t3);// 100, 200 , 300
```

### Object destructuring

Object destructuring in JavaScript is a way to extract properties from objects and bind them to variables.

- Object destructuring is particularly useful when working with functions that return objects, as it allows you to easily extract the properties you need from the returned object.\*

Diff between array and obj destruction is we use index in arr wnd keys in obj

where ever there is declaration, we can use the object destruction to make the code better

**ES6+ features**

1. numeric seperators 1_00_00_000
2. nullish coalacing ?? for this operator 0 is a truthy value
3. Optional chaining

### Ternary operators

5>4?"aww" : "cool"

### Binary operators

Arithmatic = + - / % \*
Loigcal= &&, ||,
Relational > < >=, == , ===

### Unary operator

++, --

!

### Truthy and falsy

If a value converts into true its truthy, if not converts into true its falsy

[falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

[ ] -- gives the truthy because it is not in the falsy table

## Shortcuts

<!-- 1. windows + .  emojis -->
<!-- 2. ctrl+ / comment -->

ctrl+ , settings

Ctrl+ space , Autocomplete

ctrl+shift+p --- command palette

Ctrl+click ----
