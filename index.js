let count = 0;
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('+');
const decrementButton = document.getElementById('-');

incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});