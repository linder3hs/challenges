/**
 * Convert time
 * Example
 *
 * time = 7:15:00 PM
 * result = 19:15:00 PM
 */

function timeConversion(s) {
  // Write your code here
  const hour = Number(s.slice(0, 2));
  const restHour = s.slice(2, -2);

  if (s.includes("PM")) {
    return `${hour + 12 === 24 ? 12 : hour + 12}${restHour}`;
  }

  if (s.includes("AM")) {
    if (hour === 12) return "00" + restHour;

    return `${hour > 9 ? hour : "0" + hour}${restHour}`;
  }

  return hour < 10 ? `0${hour}` : hour;
}

console.log(timeConversion("02:05:45AM"));
console.log(timeConversion("03:05:45AM"));
console.log(timeConversion("04:05:45AM"));
console.log(timeConversion("05:05:45AM"));
console.log(timeConversion("06:05:45AM"));
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("08:05:45AM"));
console.log(timeConversion("09:05:45AM"));
console.log(timeConversion("10:05:45AM"));
console.log(timeConversion("11:05:45AM"));
console.log(timeConversion("12:05:45AM"));
console.log("==========================");
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("01:05:45PM"));
console.log(timeConversion("02:05:45PM"));
console.log(timeConversion("03:05:45PM"));
console.log(timeConversion("04:05:45PM"));
console.log(timeConversion("05:05:45PM"));
console.log(timeConversion("06:05:45PM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("08:05:45PM"));
console.log(timeConversion("09:05:45PM"));
console.log(timeConversion("10:05:45PM"));
console.log(timeConversion("11:05:45PM"));
console.log(timeConversion("00:05:45PM"));
console.log(timeConversion("12:45:54PM"));
