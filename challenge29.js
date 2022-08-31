const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function findNumberInAlpahbet(letter) {
  return alphabet.findIndex((alp) => alp === letter);
}

function gridChallenge(grid) {
  // Write your code here
  let result = "YES";

  grid.forEach((element, index) => {
    const index1 = findNumberInAlpahbet(element.split("")[index]);
    const index2 = findNumberInAlpahbet(grid[index + 1]?.split("")[index]);

    if (index2 !== -1 && index1 > index2) result = "NO";
  });

  return result;
}

const test = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];

console.log(gridChallenge(test));
