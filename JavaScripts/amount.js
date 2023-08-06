var amount = parseInt(prompt("Enter amount "))
if(amount >1000){
    alert("Amount greater tha 1000")
}
else if(amount>500 && amount < 1000){
    alert("Amount greater  than 500 but less than 1000")
}
else if(amount>100 && amount < 500){
    alert("Amount greater  than 100 but less than 500")
}
else{
    alert("Amount greater than 1 ")
}
