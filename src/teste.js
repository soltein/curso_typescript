function calculateDaysBetweenDates(begin, end) {
  var oneDay = 24 * 60 * 60 * 1000;
  var firstDate = new Date(begin);
  var secondDate = new Date(end);
  return Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay),
  );
}

console.log(calculateDaysBetweenDates('01/01/2018', '01/03/2018'));
