
var Infix = (function () {
    var postfix,
        stack;

    var precedence = function (operator) {
        switch (operator) 
        {
            case '*':
            case '/':
                return 3;
            case '+':
            case '-':
                return 2;
            case '(':
                return 1;
        }
    };

    var processOperand = function (char)
    {
        postfix = postfix+char + ' ';

    };

    var processOperator = function (char) 
    {
        while (stack.length > 0 && (precedence(stack[stack.length - 1]) >= precedence(char)))
        {
            postfix = postfix + stack.pop() + ' ';
        }
        stack.push(char);
    };

    var processLeftPar = function(char) 
    {
        stack.push(char);
    };

    var processRightPar = function (char) 
    {
        var j = stack.length - 1;
        var k;
        while (true) 
        {
            k = stack.pop();
            if (k == '(' ) 
                break;
            postfix = postfix + k + ' ';
        }
    };

    var processToken = function (char) 
    {
        var type = Common.determineToken(char);//var common mathi call ahi karayu
        switch (type)//switch case chalyu 
        {
            case Common.tokenType.operand://common -> tokentype -> operand ne call karayo
                processOperand(char);
                break;
            case Common.tokenType.operator://common -> tokentype -> operator
                processOperator(char);
                break;
            case Common.tokenType.leftPar:
                processLeftPar(char);
                break;
            case Common.tokenType.rightPar:
                processRightPar(char);
                break;
        }
    };

    var start = function (infix) {
        var tokens = Common.tokenize(infix);
        for (var i = 0; i < tokens.length; i++) {
            processToken(tokens[i]);
        }
        return postfix;
    };

    var toPostfix = function (infix) {
        postfix = '';
        stack = [];
        stack.push('(');
        return start(infix + ')');
    };

    return {
        toPostfix: toPostfix
    }

})();

