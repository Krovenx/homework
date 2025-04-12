const currentDate = new Date();
const come = new Date(currentDate);
come.setDate(currentDate.getDate() + 73);
console.log("Текущая дата: " + currentDate.toLocaleDateString("ru-RU"));
console.log("Дата через 73 дня: " + come.toLocaleDateString("ru-RU"));