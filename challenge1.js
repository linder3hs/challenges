/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 */

function sortWord(word) {
  return word.toLowerCase().split("").sort().join("");
}

function isAnagram(word1, word2) {
  if (word1.toLowerCase() === word2.toLowerCase()) {
    return false;
  }

  return sortWord(word1) === sortWord(word2) ? true : false;
}

// true
console.log(isAnagram("mora", "roma"));
// false
console.log(isAnagram("mxez", "roma"));
