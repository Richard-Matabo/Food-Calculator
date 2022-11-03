
function display(value){
  document.getElementById("textfield").value+=value;
}
  
function calculate(){
  let x = document.getElementById("textfield").value;
  let y = eval(x);

  document.getElementById("textfield").value = y;

  let tipAmount = prompt("Total : " + eval(x) + ", " + "Would you like to tip?" + " 10%");
  prompt("Tip will be: " + eval(x) / 10);
  alert("Total bill: " + eval(x) +  ", " + " Please add tip");
  
}
function clearScreen(){
  document.getElementById("textfield").value = "";
}
