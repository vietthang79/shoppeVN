const decrementBtns = document.querySelectorAll('.decrement-btn');
const incrementBtns = document.querySelectorAll('.increment-btn');
const quantityValues = document.querySelectorAll('.quantity-value');

decrementBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let value = parseInt(quantityValues[index].textContent);
    if (value > 1) {
      value--;
      quantityValues[index].textContent = value;
    }
  });
});

incrementBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let value = parseInt(quantityValues[index].textContent);
    value++;
    quantityValues[index].textContent = value;
  });
});
