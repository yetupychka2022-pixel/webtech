const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== secretNumber) {
    guess = Number(prompt("Вгадайте число від 1 до 100"));

    if (guess > secretNumber) {
        alert("Менше");
    } else if (guess < secretNumber) {
        alert("Більше");
    } else if (guess === secretNumber) {
        alert("Ви вгадали! 🎉");
    } else {
        alert("Введіть коректне число");
    }
}
