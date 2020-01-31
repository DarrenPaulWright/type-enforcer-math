import integerDigits from './integerDigits.js';

/**
 * Rounds a number to a specified number of fraction digits and/or precision
 *
 * @function round
 *
 * @arg {Number} value
 * @arg {Int} [fractionDigits=0] - Must be a positive integer or null
 * @arg {Int} [precision]
 */
export default (value, fractionDigits = 0, precision) => {
	if (precision) {
		const i = integerDigits(value) || Math.log10(Math.abs(value)) >> 0;

		if (fractionDigits === null) {
			fractionDigits = precision - i;
		}

		precision = Math.pow(10, i - precision);
		value = Math.round(value / precision) * precision;
	}

	fractionDigits = Math.pow(10, Math.max(0, fractionDigits));

	return Math.round(value * fractionDigits) / fractionDigits;
}
