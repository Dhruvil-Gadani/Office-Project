var Infix = (function()
{
    var postfix;//variable declare
    var stack;//variable declare

    var precedence = function(operator)//pass expression for operator
    {
        switch (operator) //switch case
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
        postfix = postfix + char + ' ';//postfix + char value store in postfix // ' ' reuslt in vache space aavase
    };

    var processOperator = function (char) 
    {
        stack.push(char);//push operator after operand 
    };

    var processLeftPar = function (char) 
    {
        stack.push(char);//push stack
    };

    var processRightPar = function (char) 
    {
        var j = stack.length - 1,ce;//variable declare
        while (true) //while loop
        {
            ce = stack.pop();
            if (ce == '(') 
            {
                break;
            }
            postfix += ce + ' ';
        }
    };

    var processToken = function (char) 
    {
        var type = Common.determineToken(char);//call common function in determine token
        switch (type) 
        {
            case Common.tokenType.operand://1 call operand in common function
                processOperand(char);
                break;
            case Common.tokenType.operator://2 call operator in common function
                processOperator(char);
                break;
            case Common.tokenType.leftPar://3 call leftper in common function
                processLeftPar(char);
                break;
            case Common.tokenType.rightPar://4 call rightper in common function
                processRightPar(char);
                break;
        }
    };

    var start = function (infix) 
    {
        var tokens = Common.tokenize(infix);//tokens equal to common function in tokenize call
        for (var i = 0; i < tokens.length; i++)//for loop 
        {
            processToken(tokens[i]);
        }
        return postfix;//return postfix
    };

    var toPostfix = function (infix) 
    {
        postfix = '';
        stack = [];
        stack.push('(');
        return start(infix + ')');
    };

    return {
        toPostfix: toPostfix
    }

})();

