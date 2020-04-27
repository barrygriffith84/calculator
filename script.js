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

// console.log(document.querySelector("#btn1").value)
// console.log(document.querySelector("#btn2").value)
// console.log(document.querySelector("#btn1").value + document.querySelector("#btn2").value)




//EventListener set to the add button used to add the numbers in the two input fields and output the sum to a div.
document.querySelector("#add-btn").addEventListener("click", function() {
    //Grabs the value in the first input field, changes it into an integer with parseInt() and stores it in num1
    const num1 = parseInt(document.querySelector("#num1-input").value)
    //Grabs the value in the second input field, changes it into an integer with parseInt() and stores it in num2
    const num2 = parseInt(document.querySelector("#num2-input").value)
    //Runs the add function to add num1 and num2 and returns the sum, then throws it into the output div
    document.querySelector("#calc-output").innerHTML = add(num1, num2)
    //Clears the first input field
    document.querySelector("#num1-input").value = "";
    //Clears the second input field
    document.querySelector("#num2-input").value = "";
    
})


//EventListener set to the subtract button used to subtract the numbers in the two input fields and output the difference to a div.
document.querySelector("#subtract-btn").addEventListener("click", function() {
    //Grabs the value in the first input field, changes it into an integer with parseInt() and stores it in num1
    const num1 = parseInt(document.querySelector("#num1-input").value)
    //Grabs the value in the second input field, changes it into an integer with parseInt() and stores it in num2
    const num2 = parseInt(document.querySelector("#num2-input").value)
    //Runs the subtract function to subtract num1 and num2 and returns the difference, then throws it into the output div
    document.querySelector("#calc-output").innerHTML = subtract(num1, num2)
    //Clears the first input field
    document.querySelector("#num1-input").value = "";
    //Clears the second input field
    document.querySelector("#num2-input").value = "";
})

//EventListener set to the multiply button used to multiply the numbers in the two input fields and output the product to a div.
document.querySelector("#multiply-btn").addEventListener("click", function() {
    //Grabs the value in the first input field, changes it into an integer with parseInt() and stores it in num1
    const num1 = parseInt(document.querySelector("#num1-input").value)
    //Grabs the value in the second input field, changes it into an integer with parseInt() and stores it in num2
    const num2 = parseInt(document.querySelector("#num2-input").value)
    //Runs the subtract function to multiply num1 and num2 and returns the product, then throws it into the output div
    document.querySelector("#calc-output").innerHTML = multiply(num1, num2)
    //Clears the first input field
    document.querySelector("#num1-input").value = "";
    //Clears the second input field
    document.querySelector("#num2-input").value = "";
})

//EventListener set to the divide button used to divide the numbers in the two input fields and output the quotient to a div.
document.querySelector("#divide-btn").addEventListener("click", function() {
    //Grabs the value in the first input field, changes it into an integer with parseInt() and stores it in num1
    const num1 = parseInt(document.querySelector("#num1-input").value)
    //Grabs the value in the second input field, changes it into an integer with parseInt() and stores it in num2
    const num2 = parseInt(document.querySelector("#num2-input").value)
    //Runs the subtract function to divide num1 and num2 and returns the quotient, then throws it into the output div
    document.querySelector("#calc-output").innerHTML = divide(num1, num2)
     //Clears the first input field
    document.querySelector("#num1-input").value = "";
    //Clears the second input field
    document.querySelector("#num2-input").value = "";
})


//EventListener for number buttons 1 - 9.  If the first input field is empty the button clicked will fill the first input with its value.  If the first input field contains something it will then fill the second input field.  If both fields contain something, the number buttons will do nothing.
document.querySelector("#calculator").addEventListener("click", function(){
    //If the clicked button's id starts with "btn" it will trigger the if statement.  Since my number buttons have IDs of btn1, btn2, btn3, etc. it will work with all of my number buttons
    if ([event.target.id ^= "btn"]) {
        //Checks to see if the first input field is empty
        if (document.querySelector("#num1-input").value === "") {
            //Throws the value of the button into the first input field
            document.querySelector("#num1-input").value = event.target.value
        //If the first input field contains something, it will check to see if the second input field is empty
        } else if(document.querySelector("#num2-input").value === ""){
            //Throws the value of the button into the second input field
            document.querySelector("#num2-input").value = event.target.value
        }
    }   
})





//Functions to add, subtract, multiply, or divide
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    const difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    const product = num1 * num2;
    return product;
}

function divide(num1, num2){
    const divide = num1 / num2;
    return divide;
}


