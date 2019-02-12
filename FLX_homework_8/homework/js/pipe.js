function pipe() {
    var result = arguments[0];
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        result = arguments[i](result);
    }
    return result;
}
function addOne(x) {
    return x + 1;
}
function minOne(x) {
    return x - 1;
}
console.log(pipe(1, addOne, addOne, minOne, minOne));