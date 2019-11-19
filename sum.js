function f1() {
  var a = 1;
  function f2(b) {
    return a | b;
  }
  return f2;
}

var f = f1();
console.log(f(2));
