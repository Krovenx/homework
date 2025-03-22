let i = 1;
let p = Number(prompt('сколько раз повторить слово Привет'));
while (i <= p) {
    alert('Привет');
    i++;
}

let a = 1;
while (a < 6) {
    if (a == 6) {
        break;
    };
    console.log(a);
    a++;
}

let b = 7;
while (b < 23) {
    if (b == 23) {
        break;
    };
    console.log(b);
    b++;
}

const obj = {
    name: "Коля",
    salary: '200',
    name1: "Вася",
    salary1: '300',
    name2: "Петя",
    salary2: '400'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
    console.log(`${num} n = ${n}`);
}
console.log(`Полученное число последний итерации n:${n}`)
console.log(`Кол-во итераций: ${num}`);

const friday = 5;
let date = friday;
while (date <= 31) {
    console.log(`Пятница ${date} число`);
    date += 7;
}