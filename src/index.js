module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let reversed = str.split("").reverse().join("");
  return Number(reversed);
}
