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
2. nullish coalacing ?? for this operator 0 is a truthy value--binary operator
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

## Coding standards

Are meant to have uniformity through out your code base.

### Code quality

### Dry

### variables name

> Understandable / Descriptive

```javascript
let a=50;❌
let age=50;✅

```

> camelCase

```javascript
let student_name= "Neha";❌
let studentName= "Neha";✅
```

> Always choose `let` over `var`( in situations where both the let and var can work)

In case of let and const choose `const` over `let` because,

## Errors for variable names

Reserved keywords

Cannot start with numbers

cannot have special symbols($,@,#,!)

## Documentation

- single line comment

```js
//
```

- double line comment

```js
/**
 *
 *
 * /
```

To enforce the coding standard we use ESLint.
