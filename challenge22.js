/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  let result = null;

  a.forEach((element) => {
    const index = a.filter((number) => number === element);

    if (index.length === 1) result = index[0];
  });

  console.log(result);
}

lonelyinteger([1, 2, 1, 3, 4, 3, 1]);
