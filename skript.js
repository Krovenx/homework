function min(small, big) {
    if (small >= big) {
        return big;
    } else {
        return small;
    }
}
console.log(min(8, 4));
console.log(min(6, 6));

function isEven(number) {
    if (number % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(isEven(4));
console.log(isEven(5));


function printSquare(number) {
    console.log(number * number);
}
printSquare(9);

function printsSquare(number1) {
    return number1 ** 2;
}
printSquare(8);

let age = prompt("Сколько вам лет");
age = Number(age);
if (age < 0) {
    alert('Вы ввели неправильное значение');
} else if (age >= 0 && age <= 12) {
    alert('Привет, друг!');
}
else {
    alert('Добра пожаловать');
}

function multiplyNumbers(a ,b) {
    const number1 = Number(a);
    const number2 = Number(b);
    if (isNaN(number1) || isNaN(number2)) {
        return 'Одно или оба значения не являются числом';
    }
    return number1 * number2;
}

console.log(multiplyNumbers('qwer',5));
console.log(multiplyNumbers('5',5));

function printNumber () {
const userNumber = prompt("Назовите число");
const number = Number(userNumber);
if (isNaN(number)) {
    return 'Переданный параметр не является числом';
}
const n  = number ** 3;
return `${number} В кубе равняется ${n}`;
}
const result = printNumber();
console.log(result);


