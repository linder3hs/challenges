/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

function listGifts(letter) {
  const result = {};

  letter
    .trim()
    .split(" ")
    .filter((word) => !word.includes("_"))
    .forEach((word) => {
      !result[word] ? (result[word] = 1) : (result[word] += 1);
    });

  return result;
}

console.log(listGifts("bici coche balón _playstation bici coche peluche"));
