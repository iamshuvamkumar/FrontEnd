const pri =['a','b','c','d','ad','ae'];
var sot = pri.sort((a,b)=>{
    if(a<b)
    return -1;
if(a>b)
return 1;
else 
return 0;
});
console.log(sot);
var p = [1,2,4,3,5,8,6,9,8,7,1,4];
console.log(p.sort((x,y)=>x-y));   //acending
console.log(p.sort((x,y)=>y-x));  //decending