import { isFloat } from 'type-enforcer';

/**
 * Gets the number of digits to the left of the decimal point.
 *
 * @function fractionDigits
 *
 * @arg {Number} value
 */
export default (value) => {
	if (!isFloat(value) || Math.abs(value) < 1) {
		return 0;
	}

	return Math.ceil(Math.log10(Math.abs(value) + 1));
}
