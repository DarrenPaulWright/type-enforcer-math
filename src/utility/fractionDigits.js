import { isFloat } from 'type-enforcer';

/**
 * Gets the number of digits to the right of the decimal point.
 *
 * @function fractionDigits
 *
 * @arg {Number} value
 */
export default (value) => {
	if (!isFloat(value)) {
		return 0;
	}

	let e = 1;
	let digits = 0;

	while (Math.round(value * e) / e !== value) {
		e *= 10;
		digits++;
	}

	return digits;
}
