var st = parseInt(prompt("Enter num"))
var ed = parseInt(prompt("Enter num"))

for(var i=st;i<=ed;i++){
    var t = 1;  
    for(var j=1;j<=10;j++){
    t = i*j;
document.write(" ",t,"<br>")
}
document.write("<br>")
}