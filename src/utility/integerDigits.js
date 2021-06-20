import firstDigit from './firstDigit.js';

/**
 * Gets the number of digits to the left of the decimal point.
 *
 * @function integerDigits
 *
 * @param {number} value - The number to check.
 *
 * @returns {number.int}
 */
export default (value) => Math.max(0, firstDigit(value));
