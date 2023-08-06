// var getSet = function () {
//     return 7;
// };
// function fu(x) {
//  return getSet;
// }
// console.log(fu());

// const num = fu();
// console.log(num());
function sum(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function calculater(z ,x,y) {
    return z(x,y);
}

console.log("sum ",calculater(sum,5,2));
console.log("sub ",calculater(sub,5,2));