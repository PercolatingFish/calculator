const operators = {
    'add': function() {
        let total = 0;
        for (num in arguments) {
            total += +arguments[num];
        }
        return total;
    },
    'subtract': function(num1, num2) {
        return num1 - num2;
    },
    'multiply': function(num1, num2) {
        return num1 * num2;
    },
    'divide': function(num1, num2) {
        return num1/num2;
    },
}

// create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers
function operate (operator, num1, num2) {
    return operators[operator](num1, num2);
}

let display = document.getElementById("display-id")

let operator = null;
let num1 = '';
let num2 = '';

function r(num) {
    // if (operator !== null) {
    //     currentDisplay = "";
    // }
    num2 += num;
    display.textContent = num2;
}

function b(operation) {
    if (operator !== null) {
        equals()
    }
    operator = operation;
    num1 = num2;
    num2 = '';
}

function textRemover() {
    num1 = '';
    num2 = '';
    operator = null;
    display.textContent = num2;
    console.log("cleared")
}


function equals() {
    if (operator == null) {
        return
    }
    num2 = operate(operator, num1, num2);
    display.textContent = num2;
    operator = null;
}
