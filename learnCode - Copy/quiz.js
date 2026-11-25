const correct = 'b';
const answer = document.getElementById('answer');
const options = document.querySelectorAll('.opt');

answer.style.opacity = 0;

options.forEach(opt => {
  opt.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('right', 'wrong'));

    if (opt.dataset.k === correct) {
      opt.classList.add('right');
    } else {
      opt.classList.add('wrong');
    }

    answer.style.opacity = 1;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('section[data-answer]').forEach(function (quiz) {
    var correct = quiz.dataset.answer;
    var buttons = quiz.querySelectorAll('.opt');


    var result = document.createElement('p');
    result.className = 'result';
    quiz.querySelector('.qgrid').appendChild(result);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var picked = btn.dataset.k;

       
        buttons.forEach(function (b) {
          b.classList.remove('correct', 'wrong');
        });

        if (picked === correct) {
          btn.classList.add('correct');
          result.textContent = '✅ Correct!';
          
          buttons.forEach(function (b) { b.disabled = true; });
        } else {
          btn.classList.add('wrong');
          result.textContent = '❌ Not quite, try again.';
        }
      });
    });
  });
});