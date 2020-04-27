document.querySelector("#add-btn").addEventListener("click", function() {
    let num1 = document.querySelector("#num1-input").value
    let num2 = document.querySelector("#num2-input").value
    let sum = parseInt(num1) + parseInt(num2) 
    document.querySelector("#calc-output").innerHTML = sum
})


document.querySelector("#subtract-btn").addEventListener("click", function() {
    let num1 = document.querySelector("#num1-input").value
    let num2 = document.querySelector("#num2-input").value
    let sum = parseInt(num1) - parseInt(num2) 
    document.querySelector("#calc-output").innerHTML = sum
})

document.querySelector("#multiply-btn").addEventListener("click", function() {
    let num1 = document.querySelector("#num1-input").value
    let num2 = document.querySelector("#num2-input").value
    let sum = parseInt(num1) * parseInt(num2) 
    document.querySelector("#calc-output").innerHTML = sum
})

document.querySelector("#divide-btn").addEventListener("click", function() {
    let num1 = document.querySelector("#num1-input").value
    let num2 = document.querySelector("#num2-input").value
    let sum = parseInt(num1) / parseInt(num2) 
    document.querySelector("#calc-output").innerHTML = sum
})



