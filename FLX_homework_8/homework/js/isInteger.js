function isInteger(int) {
    return (int === ~~int);
}
console.log(isInteger(2.3));
console.log(isInteger(1));
console.log(isInteger(-2));