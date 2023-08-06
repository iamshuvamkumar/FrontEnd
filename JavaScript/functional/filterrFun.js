const pri =[1000,1500,3500,2500];
var flter = pri.filter((a)=>{
    return a<2000;
})
console.log(flter);

const namee = ['ram','shyam','aechna','arti','kuldeep'];
var namef = namee.filter((a)=>{
    if(a.length<5)
    return a;
});
console.log(namef);