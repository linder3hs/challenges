/*
 * Reto #29
 * ORDENA LA LISTA
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 */

function sortlist(arr, order) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (order === "asc") {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      } else if (order === "desc") {
        if (arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(sortlist([2, 6, 4, 8, 9], "asc"));
console.log(sortlist([2, 4, 6, 8, 9], "desc"));
console.log(sortlist([2, 4, 6, 8, 9]));
