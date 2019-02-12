function reverseNumber(num) {
    var reversed = 0;
    while (num !== 0) {
        reversed *= 10;
        reversed += num % 10;
        num = ~~(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(-1983));
console.log(reverseNumber(10000));