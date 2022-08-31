/**
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/

/**
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

function isValid(letter) {
  const inicio = letter.indexOf("(");
  const final = letter.indexOf(")");
  if (final === -1) return false;

  const word = letter.substring(inicio + 1, final);

  if (
    word === "" ||
    word.includes("{") ||
    word.includes("[") ||
    word.includes("(")
  )
    return false;

  return true;
}

isValid("bici coche (balón) bici coche peluche");
isValid("(peluche {) bici");
isValid("bici coche (balón bici coche");
isValid("(()) bici");
