function getRandomNumber(min = 1, max = 100) {
    if (min > max) [min, max] = [max, min];
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function guessRandomNumber() {
    const randomNumber = getRandomNumber(1, 100);
    let attempts = 0;
    let guess;
    while (true) {
        guess = prompt('Угадай число от 1 до 100');
        attempts++;
        if (guess > 100) {
            alert('Больше числа 100 не должно');
        } else if (guess < 1) {
            alert('Меньше числа 1 не должно быть');
        }
        if (guess === null) {
            alert('Игра окончена. случайное число: ' + randomNumber);
            return;
        }
        guess = Number(guess);
        if (guess < randomNumber) {
            alert('Больше');
        } else if (guess > randomNumber) {
            alert('Меньше');
        } else {
            alert(`Угадал, случайное число было: ${randomNumber}\n Попыток: ${attempts}`);
            break;
        }
    }
}