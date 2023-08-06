const body = document.querySelector('body');
console.log(body);

var h = document.createElement('h1');
// create a new element and append it to the DOM (document object model)
h.id = 'header';
body.appendChild(h); // add an element as child of another one, in this case we are adding <h> inside our <body>.

var header = document.getElementById('header');
header.id ='head';
header.innerHTML='hello javaScript';
head.style='color:brown; margin-left:45%;'

var div = document.createElement('div');
div.id='box';
console.log(div);
body.appendChild(div);
box.innerHTML = "hello";
box.style=' width:400px; height:400px; border:5px solid black;';

var p = document.createElement('p');
console.log(p);
p.id='pasage';
body.appendChild(p);
var str = 'this is my first paragraph';
pasage.innerHTML=str+str+str+str;
pasage.style='font-size:20px;color:red;margin-left:35%;'
