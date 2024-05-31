let a = 0;
for(a; a<5;a++);
console.log(a)
//output: 5

var a1 =0;
var b = 0;
while(a<3)
    {
        a1++;
        b+=a1;
       
    }
    console.log(b);//136

let size = 5;
let ae= 5;
for(let j = size; j>0; j=ae){
    document.write(ae);
    ae = ae-2;
}
// 531

//while(a2!=0)
  //  {
    //    if(a2==1)
      //      continue;
        //else
        //a2++
   // }  the continue keyword skips the rest of the statements in that iteration

var ab= 10;
do{
    ab+=1;
    console.log(ab);

}while(ab<5);
//11
// in do while , it first execute the statement and then goes to condition so it first incremented to 11 and got terminated.

for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }//0 1 3 4

  