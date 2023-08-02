// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const regularAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const code = [];
  function substitution(input, alphabet, encode = true) {

    const checkForRepeats = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) return false;
        
    alphabet.split("");
    if (encode)
    {
      for (let i = 0; i < 26; i++)
      {
        code[regularAlphabet[i]] = alphabet[i];
        
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        code[alphabet[i]] = regularAlphabet[i];
      }
    }
    let solution = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return code[letter]
    })
    return solution.join("");
  }

  return {
    substitution,
  };
})();

 

module.exports = { substitution: substitutionModule.substitution };
