const add = document.getElementById('add');
const sub = document.getElementById('subtract');
const mult = document.getElementById('multiply');
const divi = document.getElementById('divide');
const number1 = document.getElementById('111');
const number2 = document.getElementById('222');
const res = document.getElementById('result-number');


function calculate(operation) {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Введите числа!';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Деление на ноль!';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Неправильная операция!';
        }
    }
    res.textContent = result;
}

add.addEventListener('click', function() {
    calculate('add');
}),

sub.addEventListener('click', function() {
    calculate('subtract');
}),

mult.addEventListener('click', function() {
    calculate('multiply');
}),

divi.addEventListener('click', function() {
    calculate('divide');
}) 
