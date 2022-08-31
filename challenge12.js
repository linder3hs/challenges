function getUniqueCharacter(s) {
  let results = [];
  let characterUniques = s.toLowerCase().split("");

  characterUniques.forEach((element) => {
    const index = results.findIndex((res) => res.word === element);

    index === -1
      ? results.push({
          word: element,
          count: 1,
        })
      : results[index].count++;
  });

  const finalResult = results.filter((element) => element.count === 1);

  if (finalResult.length === 0) return -1;

  console.log(s.indexOf(finalResult[0].word) + 1);
}

getUniqueCharacter("falafal");
