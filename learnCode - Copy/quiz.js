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