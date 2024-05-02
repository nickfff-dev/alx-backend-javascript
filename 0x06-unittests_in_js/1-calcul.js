/**
 * Performs a calculation based on the specified type.
 * @param {string} type - The type of calculation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the calculation. Returns 'Error' if the type is 'DIVIDE' and b is 0.
 */
function calculateNumber(type, a, b) {
 a = Math.round(a);
 b = Math.round(b);

 switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      if (b === 0) {
        return 'Error';
      }
      return a / b;
    default:
      throw new Error('Invalid type');
 }
}

module.exports = calculateNumber;
