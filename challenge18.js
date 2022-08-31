function sumArray(arr) {
  return arr.reduce((prev, curr) => prev + curr);
}

function diagonalDifference(arr) {
  // Write your code here
  const elements = arr.map((ar) => ar.length);

  const dimension = Math.max(...elements);

  const firstNumbers = [];
  const secondNumbers = [];

  let position = 0;
  let positionReverse = dimension - 1;

  arr.forEach((element) => {
    if (element.length === dimension) {
      firstNumbers.push(element[position]);
      position++;
      secondNumbers.push(element[positionReverse]);
      positionReverse--;
    }
  });

  const result = sumArray(firstNumbers) - sumArray(secondNumbers);

  return Math.abs(result);
}

const test = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];

console.log(diagonalDifference(test));
