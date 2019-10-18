String.prototype.toJadenCase = function() {
  let str = this;
  return str
    .split(" ")
    .map(x => {
      return x.charAt(0).toUpperCase() + x.slice(1);
    })
    .join(" ");
};

console.log("test test".toJadenCase());
