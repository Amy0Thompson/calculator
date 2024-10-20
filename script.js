// adding functionality

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
display.value = "";

}

//using eval() only for learning purposes
function calculate(){
    try{
    display.value = eval(display.value);
    }
catch(error){
    display.value="Error";
    }
}