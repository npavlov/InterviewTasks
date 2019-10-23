const PromiseAll = async promises => {
  const results = [];
  for (let p of promises) {
    const r = await p;
    results.push(r);
  }
  return results;
};
