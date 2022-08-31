function camelcase(s) {
  let counter = 1;

  s.split("").forEach((text) => {
    if (text.toUpperCase() === text) counter++;
  });

  return counter;
}

console.log(camelcase("saveChangesInTheEditor"));
