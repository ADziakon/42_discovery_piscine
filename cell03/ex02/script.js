const btn = document.getElementById('calculate');
const num1_ = document.getElementById('number-one');
const num2_ = document.getElementById('number-two');
const operator = document.getElementById('operator');

let num1 = num1_.value;
let num2 = num2_.value;
console.log('operator: ' + operator.value + ' num: ' + num1.value + num2.value);

btn.addEventListener('click', function onClick() {
    let result = 0;
    if (num1 === 0 || num2 === 0){
        console.log('Error!');
        alert('Error!');
    }else {
        switch (operator.value) {
            case '+':
                result = num1 + num2;
                console.log('result: ' + result );
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    alert('Division by zero is not allowed');
                    return;
                }
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            default:
                alert('Invalid operator');
                return;
        }
        console.log('result: ' + result );
        alert('result: ' + result);
    }

});