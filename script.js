





// Check the strength of a password.
// Task:
// Take a password as input and check conditions:
// Length >= 8: Print "Strong Password"
// Length between 5 and 7: Print "Moderate Password"
// Length < 5: Print "Weak Password"
// Extension: Check if the password contains numbers or special characters for more detailed feedback.




var userInput = prompt("Enter password ")
var length = userInput.length;

if (length >= 8) 
    { 
     console.log("Strong Password");
    } 
    else if (length >= 5 && length <= 7)
         { 
           console.log("Moderate Password");
         } 
         else if (length < 5) 
            {
             console.log("Weak Password");
            } 
else {
    console.log("Invalid input");
}
