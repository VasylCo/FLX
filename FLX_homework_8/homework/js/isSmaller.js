function isBigger(x, y) {
    return (x > y);
}

function isSmaller(x, y) {

    return !isBigger(x, y) && x !== y;
}
console.log(isSmaller(0, 9));
console.log(isSmaller(1, -9));
console.log(isSmaller(0, 0));
console.log(isSmaller(-1, 0));