/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 */

/**
 * @param {string} text
 */
function countWords(text) {
  const splitWord = text.toLowerCase().split(" ");

  const results = [];

  splitWord.forEach((element) => {
    const cleanWord = element.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    const index = results.findIndex((res) => res.word === cleanWord);

    index === -1
      ? results.push({
          word: cleanWord,
          count: 1,
        })
      : results[index].count++;
  });

  console.log(results);
}

countWords(
  "Hola, mi nombre es Linder. Mi nombre completo es linder linder (linder3hs)."
);
