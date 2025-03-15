let a = Number(alert('10'));
let b = Number(alert('20'));

let yearOfIssue = 2007;
alert (`Год выпуска первого Айфона ${yearOfIssue}`);

let userName = (alert('Создатель языка JavaScript Brendan Eich'));

let num1 = 10;
let num2 = 2;
alert(
    "  сумма: " + (num1 + num2) +
    "  разность: " + (num1 - num2) +
    "  умножение: " + (num1 * num2) +
    "  деление: " + (num1 / num2)
);

let result = 2 ** 5;
alert(result);

let c = Number('9');
let d = Number('2');
alert("Остаток : " + (c % d));

let num = 1;
num += 5; 
num -= 3; 
num *= 7; 
num /= 3; 
alert(num);

let age = prompt(`сколько вам лет?`);
let user = {
    name: "Виталий",
    age:`${age}` ,
    isAdmin: true
};
console.log(user);
alert(
    `Имя: ${user.name}\nВозраст: ${user.age}\nАдминистратор: ${user.isAdmin ? "Да" : "Нет"}`
)

let userNam = prompt("Как вас зовут?");
alert(`Привет, ${userNam}!`);