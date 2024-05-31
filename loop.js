


const marks= [80,90,100,70,60];
// more control
for (let i=0; i<marks.length; i++){
    console.log("Index: ", i, "Mark: ", marks[i]);
}
// Readable and simple| in--> index
for (let idx in marks){
    console.log("Index: ", idx, "Mark: ", marks[idx]);
}
//Cleaner and Readable
for (let mark of marks){
    console.log("Mark: ", mark);
}

const cart=[
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
console.log(allitems);

// Ex 1.2: Find total of cart

let total = 0;
for (let { price, quantity} of allitems) {// item is the object here so we are destructing the item for the object destructing
    total += price * quantity;
    /*let cost = item.price * item.quantity;
    total= total + cost;*/

    /*
We're using a for...of loop to iterate over each item in the allitems array.

Inside the loop, we're using object destructuring to extract the price and quantity properties from each item object directly.

We then calculate the cost of each item (price \* quantity) and add it to the total variable.*/
}
console.log("Total :", total);

/* const allitems= [...cart, ...newItems]; // Assuming cart and newItems are arrays of objects

// Calculate total cost using object destructuring
let total = 0;
for (let { price, quantity } of allitems) {
    total += price * quantity;
}

console.log("Total:", total);
*/

const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
  //Exercise
  // Output
  // ['A Brief History of Time', 'Clean Code', 'Sapiens' ]

const rate= [];
for (const item of books) {
  if (item.rating >= 4.7) {
    rate.push(item.title);
  }
}
console.log(rate);

//Excercise
const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  
  // This should output:
  // [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]



const people = [];
for (const newone of employes){
    if(newone.grade >= 80) {
        people. push({ id: newone.id, status: 'Promoted'})
    }
}
console.log(people);
// top 1 movie titles
const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
  //expected output The Dark knight
  //use functions make easier

  // Function to calculate the average rating for a movie

  
  let high = -1; // Initializing with a low value
  let highRatedMovie = null; 
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    let totalRating = 0;//variable will be used to calculate the sum of all the ratings for the current movie.


    for (let j = 0; j < movie.ratings.length; j++) {//iterates  through the ratings inthe rating array
        totalRating += movie.ratings[j];
        // adds each rating to the totalRating, sum of the ratings for the current movie is present in the total rating
    }
    const averageRating = totalRating / movie.ratings.length;
    if (averageRating > high) 
        {
        high = averageRating;
        highRatedMovie = movie;
    }
}
  console.log(highRatedMovie.title);



    






