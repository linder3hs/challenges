/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function caesarCipher(s, k) {
  let result = "";

  s.split("").forEach((letter) => {
    const isUpperCase = letter.toUpperCase() === letter ? true : false;

    const index = alphabet.findIndex((alp) => alp === letter.toLowerCase());

    if (index === -1) {
      result += letter;
      return;
    }

    let position = index + k;

    while (position > 25) {
      position -= 26;
    }

    result += isUpperCase
      ? alphabet[position].toUpperCase()
      : alphabet[position];
  });

  return result;
}

console.log(
  caesarCipher(
    "DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.",
    199
  )
);
