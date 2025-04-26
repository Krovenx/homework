const interval = setInterval(() => {
    console.log(new Date());
}, 30000);
setTimeout(() => {
   clearInterval(intervalId); 
   console.log('Время прошло');

}, 30000);
