const operators = {
    add: function() {
        let total = 0;
        for (num in arguments) {
            total += +arguments[num];
        }
        return total;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1/num2;
    },
}

// create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers
function operator (operator, num1, num2) {
    return operators[operator](num1, num2);
}

console.log(operator("add", 10,20))