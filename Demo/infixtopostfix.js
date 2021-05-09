function postFix(expression) {
    var expressionA = expression.split(" ");

    let operatorStack = [];
    let output = [];

    for (let i = 0; i < expressionA.length; i++) {

        if (isNaN(expressionA[i])) {

            if ((operatorStack[operatorStack.length - 1] === '/' || operatorStack[operatorStack.length - 1] === '*' || operatorStack[operatorStack.length - 1] === "^") && (expressionA[i] === '+' || expressionA[i] === "-")) {

                output.push(operatorStack[operatorStack.length - 1]);
                operatorStack.pop();
                operatorStack.push(expressionA[i]);

            } else if ((operatorStack[operatorStack.length - 1] === '^') && (expressionA[i] === '*') || (expressionA[i] === '/') || (expressionA[i] === '-') || (expressionA[i] === '+')) {


                output.push(operatorStack[operatorStack.length - 1]);
                operatorStack.pop();
                operatorStack.push(expressionA[i]);

            } else {
                operatorStack.push(expressionA[i]);
            }


        } else {
            output.push(expressionA[i]);
        }


    }

    for (let i = operatorStack.length - 1; operatorStack.length >= 1; i--) {
        output.push(operatorStack[i]);
        operatorStack.pop();
    }

    return output;

}

let result = postFix("6 * 2");
let result2 = postFix("6 / 2 + 1");
let result3 = postFix("6 + 2 + 1");
let result4 = postFix("6 - 2 + 1");


document.getElementById("output").innerHTML = result;

document.getElementById("output2").innerHTML = result2;

document.getElementById("output3").innerHTML = result3;

document.getElementById("output4").innerHTML = result4;




 