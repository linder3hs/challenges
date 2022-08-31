function calculate(number, divider) {
  return (number / divider).toFixed(6);
}

function plusMinus(arr) {
  // Write your code here
  const positive = arr.filter((number) => number > 0).length;
  const negative = arr.filter((number) => number < 0).length;
  const zeros = arr.filter((number) => number === 0).length;

  const divider = arr.length;

  console.log(calculate(positive, divider));
  console.log(calculate(negative, divider));
  console.log(calculate(zeros, divider));
}

plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
