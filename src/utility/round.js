import firstDigit from './firstDigit.js';
import pow10 from './pow10.js';

/**
 * Rounds a number to a specified number of fraction digits and/or precision.
 *
 * @function round
 *
 * @param {number} value - The number to be rounded.
 * @param {number.int} [fractionDigits=0] - Must be a positive integer or null.
 * @param {number.int} [precision=0] - Significant digits.
 *
 * @returns {number.int}
 */
export default (value, fractionDigits = 0, precision = 0) => {
	if (precision !== 0) {
		const first = firstDigit(value);

		if (fractionDigits === null) {
			fractionDigits = precision - first;
		}

		precision = pow10(first - precision);
		value = Math.round(value / precision) * precision;
	}

	fractionDigits = pow10(Math.max(0, fractionDigits));

	return Math.round(value * fractionDigits) / fractionDigits;
};
