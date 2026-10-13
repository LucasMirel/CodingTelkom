const scoreInput = document.getElementById('score');
const result = document.getElementById('result');
function checkScore() {
    const score = Number(scoreInput.value);
    if (score > 100 || score < 0) {
        result.innerText = 'Invalid score. Please enter a value between 0 and 100.';
        result.style.color = 'orange';
        return;
    }
    if (score >= 75) {
        result.innerText = `${score} - Pass`;
        result.style.color = 'green';
    }
    else {
        result.innerText = `${score} - Fail`;
        result.style.color = 'red';
    }
}
const btnCheck = document.getElementById('btnCheck');
btnCheck.addEventListener('click', checkScore);
export {};
