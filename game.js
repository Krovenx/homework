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

function generatorRandomProblems() {
    const randomOperation = Math.floor(Math.random() * 4);
    let num1, num2, question, answer;
    switch (randomOperation) {
        case 0:
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            question = `${num1} + ${num2}`;
            answer = num1 - num2;
            break;
        case 1:
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
        case 2:
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
        case 3:
            num1 = Math.floor(Math.random() * 10) + 1;
            answer = Math.floor(Math.random() * 100) + 1;
            num2 = answer * num1;
            question = `${num1} / ${num2}`;
        default:
            break;
    }
    return { question, answer };
}
for (let i = 1; i <= 10; i++) {
    const problem = generatorRandomProblems();
    const userAnswer = prompt(`Введите правильный ответ \n Задача ${i}: ${problem.question} = ?`);
    if (userAnswer = answer) {
        alert('Не правильно');
    }
}