const fn = (value, time, cb) => setTimeout(() => cb(value), time);

const promisify = fn => {
  return (...args) => {
    return new Promise(res => {
      fn(...args, res);
    });
  };
};

promisify(fn)("value", 1000).then(console.log);
