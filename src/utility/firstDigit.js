import { isFloat } from 'type-enforcer';

/**
 * Gets the number of the position of the first digit.
 *
 * @function firstDigit
 *
 * @param {number} value - The number to check.
 *
 * @returns {number.int} For numbers >= 1 (+/-) the result is identical to integerDigits. 0 and non-floats return 0. Numbers between 0 and 1 (+/-) return the position as a negative int, so 0.1 -> 0, 0.0001 -> -3, etc.
 */
export default (value) => {
	if (!isFloat(value) || value === 0) {
		return 0;
	}

	return Math.floor(Math.log10(Math.abs(value))) + 1;
};
