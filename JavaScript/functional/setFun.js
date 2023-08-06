var arr = [1,2,1,3,4,5,6,5,4,7,8,9,8,9,2,5,7];
console.log(arr); 
var a = new Set(arr);
console.log(a);
console.log(a.add(9));
console.log(a.add(10));   //add element in set
console.log(a.delete(9),a);  // delete
console.log(a.has(5)); //has its used to a element in exits in set return only true and false


