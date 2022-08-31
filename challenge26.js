function dayOfProgrammer(year) {
  // Write your code here
  const now = new Date(year, 11, 31);
  const days = daysIntoYear(now);
  console.log(days);
  let day = 256 - 243;
  if (days === 366) day--;

  if (year.toString().split("")[0] === "1" && year.toString().includes("00"))
    day--;

  if (year === 1918) day*= 2;

  return `${day}.09.${year}`;
}

function daysIntoYear(date) {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

console.log(dayOfProgrammer(1918));
