// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let newStr = str;
//   let backwardsStr = '';

//   newStr.split('').forEach(character => {
//     backwardsStr = character + backwardsStr;
//   })
//   return backwardsStr;
// }

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed)
}


module.exports = reverse;
