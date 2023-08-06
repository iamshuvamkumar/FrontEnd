var year  = parseInt(prompt("Enter Year To Check It's Leap Year Or Not "))
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert("Leap Year")
            document.write("Leap Year")
        }
        else{
            alert("Not a Leap Year")
            document.write("Not a Leap Year")
        }
    }
}