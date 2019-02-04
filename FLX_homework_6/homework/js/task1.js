function Assign(name) {
  var temp = parseFloat(prompt(`Please input ${name}: `));
  if(!isNaN(temp) && isFinite(temp)) {
    return parseInt(temp);
}else {
    return false;
}
}
function Solution() {
  var a = Assign("a");
  if(a===false || a === 0) {
      alert('Invalid input data');
      return false;
    }
  var b = Assign("b");
  if(b===false) {
      alert('Invalid input data');
      return false;
    }
  var c = Assign("c");
  if(c===false) {
      alert('Invalid input data');
      return false;
    }
  var d = b*b-(4*a*c);
  if (d <0 ) {
      alert('No solution (Discriminant < 0)');
      return false;
    } else if (d===0) {
    var x = -(b/(2*a));
    alert(`x = ${x}`);
} else {
    var x1 = (-1*b+Math.sqrt(d))/(2*a);
    var x2 = (-1*b-Math.sqrt(d))/(2*a);
    alert(`x1 is ${x1} and x2 is ${x2}`);
}
}
Solution();

