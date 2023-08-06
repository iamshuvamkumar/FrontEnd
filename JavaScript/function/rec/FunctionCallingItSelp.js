// let a = 0;
// function smp(){
//     a++;
//     console.log("in smp fun");
//     if(a<5)
//     smp();
//     console.log("back smp fum");
// }
// console.log("in Main globle Scope ");
// smp();
// console.log("out Main globle Scope ");


// function smp(a=1){
    
//     console.log("in smp fun");
    
//     if(a<5)
//     smp(++a);
//     console.log("back smp fum");
// }
// console.log("in Main globle Scope ");
// smp();
// console.log("out Main globle Scope ");

function fact(num) {
        if (num<=1) {
            return 1;
        }else {
            return num*fact(num-1);
        }
}
console.log(fact(5));