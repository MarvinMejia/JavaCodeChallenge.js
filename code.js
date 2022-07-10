//challenge 1 
//Create two variables and assign a number to each. Console log the difference between the numbers.
// Example output: “The difference between 6 and 2 is 4
var num1 = 6;
var num2 = 2;
var finalNum = num1 - num2;

console.log("The difference between " + num1 + " and " + num2 + " is " + finalNum);

//challenge 2 
//Create two variables and assign a person’s name to each.
// Console log a statement that says which name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”

var name1 = Marvin; 
var name2 = Paula;
var name1Length = name1.length;
var name2Length = name2.length;
var nameDifference = name1Length - name2Length;
console.log("The name " + name1 + " is longer than " + name2 + " by " + nameDifference + " characters.");

//challenge 3
//Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. 
//Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
let character = prompt("Please enter a name: ");
if (character == character.toUpperCase()) {
    console.log(character + " was shouting.");
   }
if (character == character.toLowerCase()){
    console.log(character + " was whispering.");
   }
else {
    console.log(character + " is talking normally.");
}

//challenge 4 
//Create 4 math functions, one called add() that adds 2 numbers, one called subtract() 
//that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
function add(num1, num2) {
    return num1 + num2; 
};

function subtract(num1, num2) {
    return num1 - num2; 
};

function multiply(num1, num2) {
    return num1 * num2; 
};

function divide(num1, num2) {
    return num1 / num2; 
}

//challenge 5
//reate a simple calculator that prompts the user for a number, an operator (either +, -, * or /), 
//and another number, and then uses the functions created in the hard challenge to output the value in sentence form. 
//Example output: "3 + 4 = 7"
let num1 = prompt("Please enter your frist number: ");
let num2 = prompt("Please enter your second number: ");
let operator = prompt("Please enter your opperator: ")

if (operator == "+") {
    return add(num1, num2);
}
else if (operator == "-") {
    return subtract(num1, num2);
}
else if (operator == "*") {
    return multiply(num1, num2);
}
else if (operator == "/") {
    return divide(num1, num2);
}
else {
    return console.log("Invalid input")
}
