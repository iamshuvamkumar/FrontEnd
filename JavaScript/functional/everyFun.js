const pri =[1000,1500,'aa',3500,2500];
var cond = pri.every((a,b,c)=>{
    return typeof a == 'number';
});
console.log(cond);
