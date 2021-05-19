var Common = (function()
{
	var tokenType = 
    { 
        operand: 1, 
        operator: 2, 
        leftPar: 3, 
        rightPar: 4 
    },
        operators = ['+', '-', '*', '/'];//operators
    
    var determineToken = function (char) 
    {
        if (~operators.indexOf(char))//check if condition via operators is null or not 
        {
            return tokenType.operator;//return tokentype operator
        }
        switch (char) //switch use
        {
            case '(':
                return tokenType.leftPar;//return tokentype left
            case ')':
                return tokenType.rightPar;//return tokentype right 
            default:
                return tokenType.operand;//return tokentype operand
        }
    };
    
    var trimSpaces = function(str) //remove the space
    {
        return str.replace(/\s+/g, '');//white space replace
    };
    
    var tokenize = function (str) 
    {
        var num = '';//variable declare
        var res = [];//variable declare
        
        for (var i = 0; i < str.length; i++)//for loop 
        {
            switch (Common.determineToken(str[i])) //switch case
            {
                case tokenType.operand://1 case is operand
                    num += $.trim(str[i]);
                    break;
                case tokenType.operator://2 case is operator
                    if ($.isNumeric(num))
                    {
                         res.push(parseFloat(num));//convert to float
                    }
                    res.push(str[i]);
                    num = '';
                    break;
                case tokenType.leftPar://3 case is leftper
                case tokenType.rightPar://4 case is rightper
                    if ($.isNumeric(num))
                    {
                        res.push(parseFloat(num));//convert to float
                    } 
                    res.push(str[i]);
                    num = '';
                    break;
            }
        }
        if (num != '') //if check num is not equal null
        {
            res.push(num);
        }
        return res;//return variable res
    }
    
    return {
        tokenType: tokenType,           //return tokentype
        determineToken: determineToken, //return determinetoken
        trimSpaces: trimSpaces,         //return trimSpaces
        tokenize: tokenize              //return tokenize
    }
})
();