/**
 * Calculates the sum of two numbers, rounded to the nearest integer.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b, rounded to the nearest integer.
 */
function calculateNumber(a, b) {
 return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
