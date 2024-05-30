var q1=[1,2];
var q2=[...q1];
var q3 = [8,...q1, 90, 40];
console.log(q3);

var t1=[400,500];
var t2= [90,80];
var t3 = [...t2, ...t1];//merge also can be done using the spread opeartor
console.log(t3);//90,80,400,500