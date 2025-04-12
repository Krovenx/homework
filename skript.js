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
acceptsDateReturnFormat(currentDate);