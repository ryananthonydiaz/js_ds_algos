// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  Object.entries(charMap).map(([k, v]) => {
    v > max && (max = v) && (maxChar = k)
  })

  return maxChar;
}

module.exports = maxChar;
