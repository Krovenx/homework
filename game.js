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

function turnText() {
    const userInput = prompt("Введите текст, который нужно перевернуть:");
    if (userInput === null) {
        alert("Игра окончена");
        return;
    }
    const reversedText = userInput.split("").reverse().join("");
    alert(`Перевернутый текст: ${reversedText}`);
}

function gameQuiz() {
    alert("Игра Вопрос-Ответ. Попробуйте ответить правильно на 3 вопроса.");
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctCount = 0;

    for (const item of quiz) {
        const userAnswer = prompt(`${item.question}\n${item.options.join("\n")}`);
        if (userAnswer === null) {
            alert("Игра окончена");
            return;
        }

        if (parseInt(userAnswer) === item.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
}

// Игра "Камень, ножницы, бумага"-----------------------------------------------
function gameKNB() {
    const user = prompt("Камень, ножницы, бумага? (введите 'камень', 'ножницы' или 'бумага'");
    if (user === null) {
        alert("Игра окончена");
        return;
    }
    const userChoice = user.toLowerCase();
    const options = ["камень", "ножницы", "бумага"];
    if (!options.includes(userChoice)) {
        alert("Вы ввели некорректное значение!\nПожалуйста, введите одно из: 'камень', 'ножницы' или 'бумага'");
        return gameKNB();
    }
    const computer = options[Math.floor(Math.random() * options.length)];
    if (userChoice === computer) {
        alert(`Компьютер выбрал: ${computer}\nНичья!`);
    } else if (
        (userChoice === "камень" && computer === "ножницы") ||
        (userChoice === "ножницы" && computer === "бумага") ||
        (userChoice === "бумага" && computer === "камень")
    ) {
        alert(`Компьютер выбрал: ${computer}\nВы выиграли!`);
    } else {
        alert(`Компьютер выбрал: ${computer}\nВы проиграли!`);
    }

    alert("Игра окончена\nВыбор компьютера: " + computer + "\nВаш выбор: " + user);
}

const btnEl = document.querySelector('.btn');
const boxEl = document.querySelector('.box');
const colors = ['Black', 'White', 'Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Purple', 'Orange', 'Brown'];
btnEl.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    boxEl.style.backgroundColor = randomColor;
    boxEl.style.transition = '0.8s';
});
