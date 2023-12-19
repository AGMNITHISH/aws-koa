function generateOneLakhNumericStrings(length) {
  const numberOfStrings = 10000;
  const strings = [];

  for (let i = 0; i < numberOfStrings; i++) {
    let randomString = "";

    for (let j = 0; j < length; j++) {
      const randomNumber = Math.floor(Math.random() * 10); // Generate random number between 0 and 9
      randomString += randomNumber.toString();
    }

    strings.push(randomString);
  }

  return strings;
}
module.exports = {
  generateOneLakhNumericStrings,
};
