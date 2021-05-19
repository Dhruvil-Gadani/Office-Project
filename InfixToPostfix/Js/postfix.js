var Postfix = (function () 
{
    var stack = [];//variable Declare    
    var processOperand = function (char) 
    {
        stack.push(parseFloat(char));//convert into Float
    };
    var calc = function (postfix) 
    {
        var tokens;
        for (var i = 0; i < tokens.length; i++) {
            processToken(tokens[i]);
        }
        return stack.pop();
    };
})();