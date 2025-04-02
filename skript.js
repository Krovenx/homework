function min(num1, num2) {
    if (num1 >= num2) {
        return num2;
    } else {
        return num1;
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

function multiplyNumbers(a, b) {
    const number1 = Number(a);
    const number2 = Number(b);
    if (isNaN(number1) || isNaN(number2)) {
        return 'Одно или оба значения не являются числом';
    }
    return number1 * number2;
}

console.log(multiplyNumbers('qwer', 5));
console.log(multiplyNumbers('5', 5));

function printNumber() {
    const userNumber = prompt("Назовите число");
    const number = Number(userNumber);
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }
    const n = number ** 3;
    return `${number} В кубе равняется ${n}`;
}
const result = printNumber();
console.log(result);

function getRectangleArea() {
    return this.radius * this.radius;
}
function getRectanglePerimeter() {
    return this.radius * 2 + this.radius * 2;
}
const circle1 = {
    radius: 50,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};
const circle2 = {
    radius: 40,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log('Площадь круга: ', circle1.getArea());
console.log('Периметр окружности: ', circle1.getPerimeter());
console.log('Площадь круга: ', circle2.getArea());
console.log('Периметр окружности: ', circle2.getPerimeter());

