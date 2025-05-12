const allOperatorButtons = document.querySelectorAll(".operatorInput");
const allNumberButtons = document.querySelectorAll(".numberInput");
const equalButton = document.querySelector(".equalInput");
let storedValue = [];

function calculate(val){
return eval(storedValue.join(" "));
}
// Select the display
const display = document.querySelector(".display")

// Add event listeners to all number buttons

allNumberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e)=> {
        // console.log(numberButton.textContent)
    parseInt(display.textContent) === 0 ? display.textContent = numberButton.textContent : display.textContent += numberButton.textContent;

// You should STORE ON OPERATOR
    // storedValue = parseInt(display.textContent);
    // console.log(storedValue);
    });
});


allOperatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) =>{
        if (storedValue.length === 0 ) {
            storedValue.push(display.textContent);
            storedValue.push(operatorButton.textContent);
            display.textContent = 0;
            console.log(storedValue);
        } else if (storedValue.length >0) {
            storedValue.push(display.textContent);
            display.textContent = 0;

            // // Call the calculate function
            storedValue.push(operatorButton.textContent);

        } 
    })
})

equalButton.addEventListener("click", (e) => {
    storedValue.push(display.textContent)
    display.textContent = calculate(storedValue)
    storedValue = [];

});