/**
 * El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵,
 * en cambio, piensa que no. Que todos los árboles de navidad son distintos...
 * Vamos a hacer una función que nos diga si dos árboles de navidad son iguales.
 * Para ello, vamos a comparar los árboles que ya creamos en el reto 22.
 * Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores
 * en todas las ramas. Aquí tienes unos ejemplos:
 */

/** 
 const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true

*/

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

function checkIsSameTree(treeA, treeB) {
  if (treeA === null && treeB === null) return true;
  if (treeA === null && treeB !== null) return false;
  if (treeA !== null && treeB === null) return false;
  if (treeA.value !== treeB.value) return false;
  if (!checkIsSameTree(treeA.left, treeB.left)) return false;
  if (!checkIsSameTree(treeA.right, treeB.right)) return false;
  return true;
}

console.log(checkIsSameTree(tree, tree));
console.log(checkIsSameTree(tree, tree2));
console.log(checkIsSameTree(tree2, tree2));
