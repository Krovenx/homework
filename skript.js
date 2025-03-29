function min(small, big) {
    if (small >= big) {
        return big;
    } else {
        return small;
    }
}
console.log(min(8,4));
console.log(min(6,6)); 

function isEven (number) {
    if (number % 2 == 0) {
        return 'Число четное';
    }else {
        return 'Число нечетное';
    }
}
console.log(isEven (4));
console.log(isEven(5));


