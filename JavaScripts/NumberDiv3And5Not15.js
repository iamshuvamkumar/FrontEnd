var num   = parseInt(prompt("Enter Any Number"))

if((num%3==0||num%5==0)&&num%15!=0){
    document.write("Num is div 3 and 5 not 15")
}
else{
    document.write("Num is div 15")
}