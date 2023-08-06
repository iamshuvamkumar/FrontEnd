var a = "Hello String";
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// Check Upper and Lower Case 

// for(let i=0;i<a.length;i++){
//     if(a[i]>='a'&&a[i]<='z'){
//         console.log("LowerCase : "+a[i]);
//     }
//    else if(a[i]>='A'&&a[i]<='Z'){
//         console.log("UpperCase : "+a[i]);
//     }
// }
 
// // revere String 
// let str = null;
// for(let i=a.length;i>=0;i--){
//       str = str+a[i];
//     }
//     console.log(str);
//     // reverse string using array method


var arr1 = ["a","b","c","d","e"];  
var arr2 = ["f","g","h","i"];  
console.log(arr1.pop()); //remove end side
console.log(arr1);
console.log(arr1.push("5"));  //add in last
console.log(arr1);
console.log(arr1.shift());  // remove starting side
console.log(arr1);
console.log(arr1.unshift(1)); // add in first
console.log(arr1);
console.log(arr1.concat(arr2));
console.log(arr2);
console.log(arr1.splice(3,4)); //remoing range
console.log(arr1);
arr1.push('d','e')
console.log(arr1.reverse());
console.log(arr1.indexOf('c'));
console.log(arr1.join("3"));
console.log(arr1);
