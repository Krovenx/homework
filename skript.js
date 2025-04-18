// 1 задание
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);
// 2 задание
function filterByPrefix(array, prefix) {
    const lowerCasePrefix = prefix.toLowerCase();
    return array.filter(item => item.toLowerCase().startsWith(lowerCasePrefix));
}
const strings = ["banana", "Apple", "apricot", "Avocado"];
const prefix = "a";
const result = filterByPrefix(strings, prefix);
console.log(result);
// 3 задание
const number1 = 32.58884;
const roundedDown = Math.floor(number1);
console.log("Округление до меньшего целого:", roundedDown);
const roundedUp = Math.ceil(number1);
console.log("Округление до большего целого:", roundedUp);
const rounded = Math.round(number1);
console.log("Округление до ближайшего целого:", rounded);
// 4 задание
const number = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...number);
const maxValue = Math.max(...number);
console.log("минимальное значение: ", minValue, "максимальное значение", maxValue);    
// 5 задание
const randomNumber1 = Math.floor(Math.random() * 10);
console.log(randomNumber1);
// 6 задание
function generateRandomArray(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2);
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
      randomArray.push(Math.floor(Math.random() * (maxNumber + 1)));
    }
    return randomArray;
  }
const maxNumber = 10;
const randomArray = generateRandomArray(maxNumber);
console.log(randomArray);
// 7 задание
function getRandomInRange(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInRange(5, 15);
console.log("Случайное число в диапазоне от 5 до 15:", randomNumber);
// 8 задание
let currentDate1 = new Date();
console.log("Текущая дата:", currentDate1);
// 9 задание
const currentDate2 = new Date();
const come = new Date(currentDate2);
come.setDate(currentDate2.getDate() + 73);
console.log("Текущая дата: " + currentDate2.toLocaleDateString("ru-RU"));
console.log("Дата через 73 дня: " + come.toLocaleDateString("ru-RU"));
// 10 задание
function acceptsDateReturnFormat(date) {
    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник",
        "среда", "четверг", "пятница", "суббота"
    ];
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    console.log(`Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
Время: ${hours}:${minutes}:${seconds}`);
}
const currentDate = new Date();