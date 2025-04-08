let numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) break;
    console.log(numbers[i]);
}

let number = [1, 5, 4, 10, 0, 3];
console.log(number[2]);

let num = [1, 3, 5, 10, 20];
num = num.join(' ');
console.log(num);

let manyNum = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
for (let item of manyNum) {
    for (let i = 0; i < item.length; i++) {
        if (i === 0) {
            console.log(`Массивы ${item[i]}`);
        } else {
            console.log(`\t ${item[i]}`);
        }
    }
}

let num5 = [1, 1, 1];
num5.push('2', '2', '2');
console.log(num5);

const arr = [9, 8, 7, 'a', 6, 5];
const filteredArr = arr.filter(item => typeof item === 'number');
filteredArr.sort((a, b) => a - b);
console.log(filteredArr);

const arr7 = [9, 8, 7, 6, 5];
const guess = prompt("угадай число");
if (arr7.includes(Number(guess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

let str = 'abcdef';
let reverseStr = str.split('').reverse().join('');
console.log(reverseStr);


const arr1 = [
    [1, 2, 3],
    [4, 5, 6]
]
const spreadArr = [...arr1[0], ...arr1[1]];
console.log(spreadArr);

const num10 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
console.log('Исходный массив:', num10);
for (let i = 0; i < num10.length - 1; i++) {
    const current = num10[i];
    const next = num10[i + 1];
    const sum = current + next;
    console.log(`Итерация ${i + 1}: ${current} + ${next} = ${sum}`);
}

function squareNumbers(arr) {
    return arr.map(item => item ** 2);
}
console.log(squareNumbers([1, 2, 3]));

function getlength(arr) {
    return arr.map(item => item.length);
}
console.log(getlength(['строка', 'длина']));

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}
console.log(negativeNumbers([1, 2, 3, -4, 5, -6, -7, -8, 9]));


function randomNumbb() {
    return Math.floor(Math.random() * 10);
}
const arr13 = [];
for (let i = 0; i < 10; i++) {
    arr13.push(randomNumbb()); 
}
console.log(arr13);
const evenArr = [];
for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] % 2 === 0) {
        evenArr.push(arr13[i]);
    }  
}
console.log(evenArr);