{
    let x = 2;
  }
  // x can NOT be used here
  {
    var x = 2;
  }
  // x CAN be used here
  // code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

  //Global variables
  let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


{
    var x1= 10;
    let x2=20;
    console.log(x2);
    }
    console.log(x1);
    
    
    //var z2;
    //console.log(z2);
    function fun(){
        var t1 = 10;
        let t2= 30;
        console.log(t1);
        console.log(t2);
    }
    
    
    function driving(age){
let message; // Declaring the variable outside of the blocks

if(age > 18){
    message = "eligible"; // Assigning value inside the if block
} else {
    message = "not eligible"; // Assigning value inside the else block
}

console.log("you are " + message); // Logging the message variable
}

driving(20);

var x1 = 3;
var x2 = "5";
console.log(x1+x2);
console.log(x1-x2);

[2,4,5] +"abc"
//The array [2, 4, 5] is coerced into a string. This results in the string "2,4,5".
//Then, "2,4,5" is concatenated with the string "abc".
   
typeof(NaN)// number

var g1 = 5;
var g2 = "5";
console.log(g1 ==g2);
console.log(g1 ===g2);//