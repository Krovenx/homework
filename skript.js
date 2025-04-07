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


