/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print)
 * los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión),
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 */

Array.from({ length: 100 }, (_, i) => i + 1).forEach((number) => {
  const multiplo3 = number % 3 === 0;
  const multiplo5 = number % 5 === 0;

  console.log(
    multiplo3 && multiplo5
      ? "fizzbuzz"
      : multiplo3
      ? "fizz"
      : multiplo5
      ? "buzz"
      : number
  );
});
