/* Usage: Use simple conditional statements
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal. */

//first prompt
let firstNumber = Number(prompt('Enter first number'));
//second prompt 
let secondNumber = Number(prompt('Enter second number'));

alert(largest(firstNumber, secondNumber))