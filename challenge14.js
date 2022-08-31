function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function sumArray(arr) {
  return arr.reduce((prev, current) => prev + current);
}

function miniMaxSum(arr) {
  // Write your code here
  const orderArray = sortArray(arr);

  const max = sumArray(orderArray) - orderArray[0];
  const min = sumArray(orderArray) - orderArray[orderArray.length - 1];

  console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
