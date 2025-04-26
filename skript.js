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
