/* Usage: Use else if statements
1.	Collect the a number between 1 and 100 from the user. 
2.	Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
3.	If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console. */

function assignGrade(score) {
 prompt("what is your score");   
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 60) {
        return 'D';
    } else if (score < 1){
        return 'Only numbers between 1 and 100 are accepted';
    } else if (score > 100){
        return 'Only numbers between 1 and 100 are accepted';
    } else {
        return 'F';
    }

}

console.log('You got a ' + assignGrade(score));
