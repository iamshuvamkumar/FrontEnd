var num = parseInt(prompt("Enter any Value"));
var add = prompt("Enter any arthmatic symbol");
var num1 = parseInt(prompt("Enter any Value"));

if (add == "+") {
  document.write(num + num1);
} else if (add == "-") {
  document.write(num - num1);
} else if (add == "*") {
  document.write(num * num1);
} else if (add == "/") {
  document.write(num / num1);
}
