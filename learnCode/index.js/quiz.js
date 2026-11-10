const correct = 'b';
const answer = document.getElementById('answer');
const options = document.querySelectorAll('.opt');

answer.style.opacity = 0;

options.forEach(opt => {
  opt.addEventListener('click', () => {
    options.forEach(o => o.style.color = '');

    if (opt.dataset.k === correct) {
      opt.style.color = 'green';
    } else {
      opt.style.color = 'red';
    }

    answer.style.opacity = 1;
  });
});