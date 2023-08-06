const pri =[1000,1500,3500,2500];
var fnd = pri.find((a)=>{
    return a == 1600;
});
console.log(fnd);

var fnd1 = pri.find((a)=>{
    return a == 1500;
});
console.log(fnd1);

var a = [2,3,6,7,4,9,8,10,5];
function Check(num) {
    return num%5==0;
}
var c = a.find(Check);
var x = a.findIndex(Check);
console.log(c,a.findIndex(Check));

console.log(a.map(Check));
console.log(a.filter(Check));

console.log(a.find((b)=>b%5==0));


