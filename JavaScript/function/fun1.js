// function call() {
//     console.log("hi");
//     console.log("hello");
// }call();


// function say() {
//     return "Hello";
// }
// var str = say();
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str+" hi");


// function get(str) {
//     console.log(str);
// }
// get('Hi');
// get('Hello');


// function getmsg(str='good') {
//     return "hi "+str+" hoow are you";
// }
// console.log(getmsg('shivam'));
// console.log(getmsg('shuvam'));
// console.log(getmsg());


// function sum(a,b) {
//     return a+b;
// }
// var total = sum(5,3);
// console.log(total);

//argument keyword----------------------------------------

// function sumofall() {
//     let sum = 0;
//     for(let i =0 ; i<arguments.length;i++){
//          sum +=arguments[i];
//     }
//     return sum;
// }

// console.log(sumofall(1,2,3,4,5));
// console.log(sumofall('e','d','c','b','a'));

// function sqr(x) {    //name function
//         return x*x;
// }

// const sqar =function(x){return x*x}  //anonymous function
// console.log("sqr of 6 is : ",sqar(6))

// const sqar1 = (x)=>x*x;
// ///arrow function
// console.log("sqr of 8 is : ",sqar1(8));

// const sqar2 = (x)=>{
//     console.log("Input value",x);
//     return x*x;
// }
// console.log("sqr of 9 is : ",sqar2(9));

//Anonymous Function--------------------------------------------

// const getName = function(name,lastname){
//     return name+" "+lastname;
// }
// console.log(getName('s','k'));

//anonymous Invok function----------------------------------------

// (function (x) {
//     console.log(x*x);
// })(3);

//refer anonyomous function--------------------------------------

// const square =function(x,y){
//     return x+y;
// }
// var tot = square;
// console.log(tot(2,5));


