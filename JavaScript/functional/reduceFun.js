const pri =[1000,1500,3500,2500];
const res = pri.reduce((a,b)=>{
    a =a+b;
    return a;
},0);
console.log(res);