function staircase(n) {
  // Write your code here
  let count = 1;

  while (count <= n) {
    console.log(generateHashtag(count, n - count));
    count++;
  }
}

function generateHashtag(number, limit) {
  let result = "";
  for (let i = 0; i < limit; i++) {
    result += " ";
  }

  for (let i = 0; i < number; i++) {
    result += "#";
  }

  return result;
}

staircase(100);
