function getMin() {
    var len = arguments.length;
    var min = arguments[0];
    for (var i = 1; i < len; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(getMin(2, 5, 1, -90, 23, 45));