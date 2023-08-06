const pri =[1000,1500,3500,2500];

//using foreach
var output = [];
pri.forEach(function (a) {
    output.push(a*0.5);
})
console.log(output);

//using map  //map its used to return new array same size same data 
var mapp = pri.map( (a)=> {
    return a*0.5;
})
console.log(mapp);

var mapi = pri.map( (a)=> {
    return String(a);
})

console.log(mapi);
var x =pri.map((a)=>{
   return a;
});
console.log(x);