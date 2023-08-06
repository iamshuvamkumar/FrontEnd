//Constructer

// var myDetail = {
//   name: "Shivam",
//   age: 22,
//   address: "Badarbur",
//   hobbies: "coding",
//   titel: ["Java", "Full Stack Developer", "C"],
//   follower: 2010,
//   great: function () {
//     console.log("Hello user");
//   },
// };
// console.log(myDetail);

function TDetail(name, age, address, hobbies, titel, follower) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.hobbies = hobbies;
  this.titel = titel;
  this.follower = follower;
}
var getDeatils = new TDetail('shk',23,'noida','reading','student',2032);
/* The line `// console.log(getDeatils);` is used to print the `getDeatils` object to the console. It
allows you to see the current state of the object and its properties. */
// console.log(getDeatils);

// getDeatils.cours='java';
 // console.log(getDeatils); 
// console.log(Object.keys(getDeatils));
// console.log(Object.values(getDeatils));

// Object.freeze(getDeatils);  //frezzdata


// console.log(getDeatils);
// getDeatils.address = 'xyz';
// console.log(getDeatils);

// Object.seal(getDeatils);  

// getDeatils.name=10;
// console.log(getDeatils);

for(var key in getDeatils){
    console.log(getDeatils[key]);
}