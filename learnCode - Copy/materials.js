const circles = document.querySelectorAll('.circle');

circles.forEach(btn => {
  btn.addEventListener('click', () => {
    circles.forEach(c => c.classList.remove('on'));
    btn.classList.add('on');
  });
});