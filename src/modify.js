const uppercaseAll = (...words) => {
  const result = [];
  for (const word of words) {
    result.push(word.toUpperCase());
  }
  return result;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};