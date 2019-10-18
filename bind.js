const bind = (fn, context) => {
  return (...args) => {
    return fn.call(context, ...args);
  };
};

function fn(value) {
  return value + this.value;
}

const bound = bind(fn, { value: 1 });

console.log(bound(1));
