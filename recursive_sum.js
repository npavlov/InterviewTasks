var add = t => {
  var sum = t;
  var func = x => {
    if (x) {
      sum += x;
      return func;
    } else {
      return sum;
    }
  };
  func.valueOf = () => sum;
  return func;
};

console.log("wtf? ", +add(1)(2)(4)(7));
