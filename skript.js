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