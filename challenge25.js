function gradingStudents(grades) {
  // Write your code here
  const results = [];

  grades.forEach((grade) => {
    let count = 0;

    while (grade % 5 !== 0) {
      grade++;
      count++;
    }

    if (count > 2 || grade < 40) {
      results.push(grade - count);
    } else {
      results.push(grade);
    }
  });

  return results;
}

console.log(gradingStudents([73, 67, 38, 33])); // [75, 67, 40, 33]
