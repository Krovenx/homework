function getRandomInRange(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInRange(5, 15);
console.log("Случайное число в диапазоне от 5 до 15:", randomNumber);
