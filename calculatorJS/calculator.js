const numberInput = document.getElementById('number');
const result = document.getElementById('result');
function addition() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const sum = num1 + num2;
    result.textContent = `${num1} + ${num2} = ${sum}`;
}
function subtraction() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const difference = num1 - num2;
    result.textContent = `${num1} - ${num2} = ${difference}`;
}
function multiplication() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const product = num1 * num2;
    result.textContent = `${num1} x ${num2} = ${product}`;
}
function division() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    if (num2 === 0) {
        result.textContent = "Division by zero is not allowed.";
    }
    else {
        const quotient = num1 / num2;
        result.textContent = `${num1} ÷ ${num2} = ${quotient}`;
    }
}
const btnAdd = document.getElementById('btnAdd');
const btnSubtract = document.getElementById('btnSubtract');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
btnAdd.addEventListener('click', addition);
btnSubtract.addEventListener('click', subtraction);
btnMultiply.addEventListener('click', multiplication);
btnDivide.addEventListener('click', division);
export {};
