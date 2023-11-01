const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = count;
}
