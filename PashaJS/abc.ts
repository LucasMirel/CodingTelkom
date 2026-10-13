export {};

const scoreInput = document.getElementById('score') as HTMLInputElement;
const result = document.getElementById('result') as HTMLElement;

function checkScore(): void {
    const score: number = Number(scoreInput.value);
    if(score > 100 || score < 0) {
        result.innerText = 'Invalid score. Please enter a value between 0 and 100.';
        result.style.color = 'orange';
        return;
    }
    
    if(score >= 75) {
        result.innerText = `${score} - Pass` ;
        result.style.color = 'green';

    } else {
        result.innerText = `${score} - Fail`;
        result.style.color = 'red';
    }
}
const btnCheck = document.getElementById('btnCheck') as HTMLElement;
btnCheck.addEventListener('click', checkScore);