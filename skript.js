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
for (let item of manyNum ) {
    for (let i = 0; i < item.length; i++) {
        if (i === 0) {
            console.log(`Массивы ${item[i]}`);
        }else {
            console.log (`\t ${item[i]}`);
        }
    }
}

let num5 = [1, 1, 1];
num5.push('2','2','2');
console.log(num5);

const arr = [9, 8, 7, 'a', 6, 5];
const filteredArr = arr.filter(item => typeof item === 'number');
filteredArr.sort((a, b) => a - b);
console.log(filteredArr);

const arr7 = [9, 8, 7, 6, 5];
const guess = prompt("угадай число");
if (arr7.includes(Number(guess))) {
    alert("Угадал");
}else {
    alert("Не угадал");
}

let str = 'abcdef';
let reverseStr = str.split('').reverse().join('');
console.log(reverseStr);




