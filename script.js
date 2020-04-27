document.querySelector("#add-btn").addEventListener("click", function() {
    let num1 = document.querySelector("#num1-input").value
    let num2 = document.querySelector("#num2-input").value
    let sum = parseInt(num1) + parseInt(num2) 
    console.log(num1)
    console.log(num2)
    console.log(sum)

    document.querySelector("#calc-output").innerHTML = sum
})


