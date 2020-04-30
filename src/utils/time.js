function formatTime(num) {
    if (num < 10) {
        num = `0${num}`
    }
    return num;
}
function getNowDayTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = formatTime(date.getMonth() + 1);
    const day = formatTime(date.getDate());
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const todayTime = `${year}${month}${day}`;
    return parseInt(todayTime);
}
export {getNowDayTime}