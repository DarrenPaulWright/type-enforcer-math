import firstDigit from './firstDigit.js';

/**
 * Gets the number of digits to the left of the decimal point.
 *
 * @function integerDigits
 *
 * @arg {Number} value
 */
export default (value) => Math.max(0, firstDigit(value));
