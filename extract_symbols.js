function extractSymbols(input) {
  let result = input.slice(0, 2);
  for (let i = 2; i < input.length; i++) {
    if (input[i] !== input[i - 1] || input[i] !== input[i - 2]) {
      result += input[i];
    }
  }
  return result;
}

console.log(extractSymbols("eedaaad"));
