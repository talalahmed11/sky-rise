
const counters = document.querySelectorAll('.counter span');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const speed = 50;
    if (count < target) {
      counter.innerText = count + 1;
      setTimeout(update, speed);
    }
  };
  update();
});