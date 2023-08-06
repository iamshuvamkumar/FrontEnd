var math = parseInt(prompt("Enter your math marks"))
var hindi = parseInt(prompt("Enter your hindi marks"))
var eng  = parseInt(prompt("Enter your  eng marks"))
var sci  = parseInt(prompt("Enter your  sci marks"))
var ssc  = parseInt(prompt("Enter your ssc marks"))
 var total = math+hindi+eng+sci+ssc;
 //alert(total);
var per = parseFloat(total/5.0);
 //alert(per);
 if(per>90&&per<100){
   document.write("A") 
   alert("A")
 }
 else if(per>80&&per<90){
    document.write("B") 
    alert("B")
  }
  else if(per>70&&per<80){
    document.write("C") 
    alert("C")
  }
  else if(per>60&&per<70){
    document.write("D") 
    alert("D")
  }
  else if(per>50&&per<60){
    document.write("E") 
    alert("E")
  }
  else if(per>40&&per<50){
    document.write("F") 
    alert("F")
  }

