function formatTime(time) {
    var days = ~~(time / 1440);
    var hours = ~~((time - days * 1440) / 60);
    var minutes = time - days * 1440 - hours * 60;
    return (days + " day(s), " + hours + " hour(s) " + minutes + "minute(s).");
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(1441));