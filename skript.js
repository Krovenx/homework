// 1 задание
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

 // 2 Задание
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

 // 3 Задание
const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000); 
setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);
console.log(new Date());

 // 4 Задание
function delayForSecond(callback) {
    setTimeout(callback,1000);
    callback();
}
console.log(filter([3, -4, 1, 9], isPositive));

// 5 задание
function delayForSecond(cb) {
    setTimeout(() => {
        console.log("прошла одна секунда");
        if (cb) { cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));
