const Mname = document.getElementById('name');
console.log(Mname);
Mname.innerHTML= "HELLO";

const Mdisc = document.getElementsByClassName('disc')[0];
console.log(Mdisc);
Mdisc.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus repellat blanditiis laborum expedita eosveniam distinctio voluptatibus esse quia. Dicta';

const header = document.createElement('h1');
header.id = 'header';

const bodyRef = document.querySelector('body');
bodyRef.append(header);

const Mnam = document.getElementById('header');
console.log(Mnam);
Mnam.innerHTML= "Header";
// bodyRef.removeChild(Mdisc); //its remove ---------------------

const cool = document.getElementsByClassName('cool')[0];
cool.innerHTML="Cooll";
cool.style='color:red; background-color:#fff;font-size:20px'

const home = document.getElementById('home');
home.innerHTML= "Home";
home.style='text-decoration: none;color:black;font-size:20px;';

const ana = document.getElementsByTagName('li')[0];
console.log(ana);
ana.style='list-style: none;'

console.log(cool.classList); //----------------------------------------//
cool.classList.add('box');//-------------------------------------------//
cool.classList.remove('cool')

//Event lisner ------------------==********************

const  btn = document.createElement('button');
btn.innerHTML = 'click';
btn.addEventListener("click", function(){
window.open('https://www.hackerrank.com/domains/java?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=java','_blank');
});
 bodyRef.append(btn);
