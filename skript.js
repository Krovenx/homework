function delayForSecond(callback) {
    setTimeout(callback,1000);
    callback();
}

delayForSecond(function() {
    console.log('Привет, Глеб');
})
