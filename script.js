// Build a Calculator

// This an exercise to practice event listeners and printing to the DOM.
// Addition

// Create a calculator that only does addition.

//The calculator should have two number inputs and a button that says "Add".
//When the user clicks the "Add" button, the sum of the two numbers they entered into the inputs should be printed to the DOM below the calculator and the inputs should be cleared. You may need to convert strings to numbers to make this work.

//You can stop here and go back and work on exercises if you want. Or you can continue with the following challenges:
// Subtraction

//Add a button that says "Subtract". When the user clicks the subtract button, the difference between the two numbers they entered should be printed to the DOM below the calculator.
// Division and Multiplication.

//Add two more buttons to your calculator-- one that multiplies the two numbers and prints the result to the DOM, and one that divides the two numbers and prints the result to the DOM.
// Advanced Challenge

//Refactor your app so that, instead of using number inputs, make a button for the numbers 0 through 9 like you would see on the calculator app on your phone. When the user clicks one of the number buttons or one of the mathematical symbol buttons, that number or symbol should appear in the "equation" field at the top of your calculator.

//Users should be able to enter more complex equations with more than two operands. (For example, they should be able to enter 2 + 2 x 2.) When the user clicks an = button, they should see the result of their equation printed to the DOM.



//EventListener for every button accept "=".  Takes the value of the button pressed and puts it in the output div
document.querySelector("#buttons-div").addEventListener("click", function(){
    //checks for any button with an ID that starts with calc
    if ([event.target.id ^= "calc"]) {
        //grabs the value of the button pressed and throws it into the "#calc-output" div
        document.querySelector("#calc-output").innerHTML += event.target.value
    }     
})

//EventListener for the "=" button.  Calculates the formula in the "#calc-output" div
document.querySelector("#equal").addEventListener("click", function(){
    //Takes the string in the the html tags of the "#calc-output" div, uses the eval function to get the answer to the formula, and injects it into the "#calc-output" div.     
    document.querySelector("#calc-output").innerHTML = eval(document.querySelector("#calc-output").innerHTML)
})






