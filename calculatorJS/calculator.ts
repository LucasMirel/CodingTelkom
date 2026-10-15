export {};

const numberInput = document.getElementById('number') as HTMLInputElement;
const result = document.getElementById('result') as HTMLElement;


function addition(): void {
    const num1: number = Number((document.getElementById('num1') as HTMLInputElement).value);
    const num2: number = Number((document.getElementById('num2') as HTMLInputElement).value);
    const sum: number = num1 + num2;
    result.textContent = `${num1} + ${num2} = ${sum}`;
}

function subtraction(): void {
    const num1: number = Number((document.getElementById('num1') as HTMLInputElement).value);
    const num2: number = Number((document.getElementById('num2') as HTMLInputElement).value);
    const difference: number = num1 - num2;
    result.textContent = `${num1} - ${num2} = ${difference}`;
}

function multiplication(): void {
    const num1: number = Number((document.getElementById('num1') as HTMLInputElement).value);
    const num2: number = Number((document.getElementById('num2') as HTMLInputElement).value);
    const product: number = num1 * num2;
    result.textContent = `${num1} x ${num2} = ${product}`;
}

function division(): void {
    const num1: number = Number((document.getElementById('num1') as HTMLInputElement).value);
    const num2: number = Number((document.getElementById('num2') as HTMLInputElement).value);
    if (num2 === 0) {
        result.textContent = "Division by zero is not allowed.";
    } else {
        const quotient: number = num1 / num2;
        result.textContent = `${num1} ÷ ${num2} = ${quotient}`;
    }
}

const btnAdd = document.getElementById('btnAdd') as HTMLElement;
const btnSubtract = document.getElementById('btnSubtract') as HTMLElement;
const btnMultiply = document.getElementById('btnMultiply') as HTMLElement;
const btnDivide = document.getElementById('btnDivide') as HTMLElement;
 
btnAdd.addEventListener('click', addition);
btnSubtract.addEventListener('click', subtraction);
btnMultiply.addEventListener('click', multiplication);
btnDivide.addEventListener('click', division);