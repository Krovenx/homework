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
        case 0: // Сложение
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case 1: // Вычитание
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case 2: // Умножение
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case 3: // Деление
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * answer;
            question = `${num1} / ${num2}`;
            break;
    }
    return { question, answer };
}

function startProblems() {
    while (true) {
        const problem = generatorRandomProblems();
        let attempts = 0;
        while (true) {
            const userAnswer = prompt(`Введите правильный ответ \n Задача: ${problem.question} = ?`);
            if (userAnswer === null) {
                alert("Игра окончена");
                return;
            }
            const parsedAnswer = parseFloat(userAnswer);
            if (isNaN(parsedAnswer)) {
                alert("Введите число!");
                continue;
            }
            if (parsedAnswer !== problem.answer) {
                attempts++;
                alert('Не правильно');
            } else {
                alert(`Правильно! Ответ: ${problem.answer}, Попыток: ${attempts}`);
                break;
            }
        }
    }
}



