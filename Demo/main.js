//http://www.ivansivak.net/blog/simple-math-evaluator-infix-to-postfix-converter-and-calculator-reverse-polish-notation

$(document).ready(function () {
    $('#btnCalc').click(function () {
        var infix = $('#expression').val(),
            postfix = Infix.toPostfix(infix);
            
        $('#spanPostfix').text(postfix).parent().fadeIn();
        $('#spanResult').text(Postfix.calc(postfix));
    });
});