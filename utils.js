function padWithZero(number) {
  return number < 10 ? `0${number}` : number.toString();
}

function getDateString(date) {
  return `${date.getFullYear()}-${padWithZero(date.getMonth() + 1)}-${padWithZero(date.getDate())}T${date.getHours()}_${date.getMinutes()}`;
}

module.exports = {
  padWithZero,
  getDateString,
}