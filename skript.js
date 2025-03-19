let password = 'пароль';
let userPassword = (prompt('Введите пароль'));
userPassword = userPassword.toLocaleLowerCase()
switch (userPassword) {
    case `${password}`:
        console.log('Пароль введен верно');
        break;
    default:
        console.log('Пароль введен неправильно');
        break;
}

let c = 5;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 105;
let e = 10;
if (d >= 100 || e <= 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}
let a = '2';
let b = '3';
console.log(a + b);

let monthNumber = prompt("Введите номер месяца(от 1 до 12)");
if (monthNumber < 1 || monthNumber > 12) {
    console.log("номер месяца должен быть от 1 до 12");
} else {
    switch (monthNumber) {
        case ('12'):
            console.log("Зима")
            break;
        case ('1'):
            console.log("Зима")
            break;
        case ('2'):
            console.log("Зима")
            break;
        case ('3'):
            console.log("Весна")
            break;
        case ('4'):
            console.log("Весна")
            break;
        case ('5'):
            console.log("Весна")
            break;
        case ('6'):
            console.log("Лето")
            break;
        case ('7'):
            console.log("Лето")
            break;
        case ('8'):
            console.log("Лето")
            break;
        case ('9'):
            console.log("Осень")
            break;
        case ('10'):
            console.log("Осень")
            break;
        case ('11'):
            console.log("Осень")
            break;
        default:
            console.log("Номер месяца не больше 12")
            break;
    }
}








