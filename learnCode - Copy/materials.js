const circles = document.querySelectorAll('.circle');

circles.forEach(btn => {
  btn.addEventListener('click', () => {
    circles.forEach(c => c.style.backgroundColor = '');
    btn.style.backgroundColor = 'gold';
  });
});