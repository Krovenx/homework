let a = Number(alert('10'));
let b =Number(alert('20'));

let ageIphone = ('Год выпуска первого Айфона');

alert(ageIphone);

let userName =(alert('Создатель языка JavaScript Виталий'));

let num1 = 10;
let num2 = 2;

alert(
    "  сумма: " + (num1 + num2) +
    "  разность: " + (num1 - num2) +
    "  умножение: " + (num1 * num2) +
    "  деление: " + (num1 / num2)
);

let result = 2 ** 5;
alert (result);

let c = Number('9');
let d = Number('2');

alert ("Остаток : " + (c % d));

let num = 1;
 num += 5; // Эквивалентно num = num + 5;
 num -= 3; // Эквивалентно num = num - 3;
 num *= 7; // Эквивалентно num = num * 7;
 num /= 3; // Эквивалентно num = num / 3;
alert(num);

let age = prompt('сколько вам лет?');

let user = {
 name: "Виталий" ,
 age:  "21",
 isAdmin:true
};

console.log(user);
alert(
    `Имя: ${user.name}\nВозраст: ${user.age}\nАдминистратор: ${user.isAdmin ? "Да" : "Нет"}`
)
