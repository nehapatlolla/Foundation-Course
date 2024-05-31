function full(first, last){
 return "neha"+last+ ","+ first + " 😁!!!"
}
const movieUrl = (domain, genre, year) => {
    return `http://${domain}?genre=${genre}&year=${year}`;//interpolation , more readability
        //return "http://" + domain + "?genere=" + genre + "&year=" + year;
   
  };
  
  console.log(movieUrl("imdb.com", "thriller", 2020));

  // using the templaye literal

  var [t1, t2, t3=80]= [100, 200, null]; // declaring the value
  console.log(t1, t2, t3);// undefined if the t3 is not assigned, 80 if default is assigned, 
  // 100, 200, null, null is also considered as a value

const [t6, t7, t8=80]= [100, 200, undefined]; 
  console.log(t6, t7, t8);// 100 200 80
  
  const [, t9, tt, tp=80]= [100, 200, null];
  console.log(t9, tt, tp); // we dont have the key value for 100 so the output is 200 null 80

  const [, to, tr, th=80]= [100, 200, null];
  console.log(to, tr, th);

  /*const { Name, networth, power}= {
    Name: 'John',
    house: '🩻',S
    networth: " 😎😎😎"
    power: 30,
    phrase: " ❤️ you 3000 "
  };
*/


  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  // Object destructuring
  const { firstName, lastName, age } = person;
  
  console.log(firstName); // Output: John
  console.log(lastName); // Output: Doe
  console.log(age); // Output: 30

  const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    // age property is missing
  };
  
  // Object destructuring with default value and renaming
  const { firstName: fName, lastName: lName, age2 = 25 } = person;
  
  console.log(fName); // Output: John
  console.log(lName); // Output: Doe
  console.log(age2); // Output: 25 (default value)
  



/*const cart=[
    {name: "Apple", price: 0.5, quantity:4},
    {name: "Banana", price: 0.25, quantity:6}
];
const newItems= [
    {
        name: "Cherry", price: 0.75, quantity:5},
    {name: "Date", price: 1, quantity:3},

]

//   Ex 1.1: Combine cart + newItems
const allitems= [... cart, ... newItems];//use the spread operator
//console.log(allitems)

// Ex 1.2: Find total of cart

let total = 0;
for (let { price, quantity} of allitems) {
    total += price * quantity;
    /*let cost = item.price * item.quantity;
    total= total + cost;
}
console.log("Total :", total);*/ //destructuring

const avenger ={
    name1: "neha",
    house: "dupelex",
    power1 : "hehe",
    phrase: "good home"

}
const {name1, power1, phrase} = avenger; // object detsruction

// 5>4?"aww" : "cool" ternary operator

// Create Target Object
const p1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const p5 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
  Object.assign(p1, p5)

  var [t1, t2, ... t3]= [10,20,30,40,50,60,70,80]// it is rest operator CLUE: if spread is on the left consider as the rest 
  console.log(t1,t2,t3)//datatype of t3 is array of numbers
  let a = [1, 2, 3];
let

b = a;
b.push(4);
console.log(a.length);