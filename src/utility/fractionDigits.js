import { isFloat } from 'type-enforcer';

const PERFORMANCE_CUTOFF = 1e-35;

/**
 * Gets the number of digits to the right of the decimal point.
 *
 * @function fractionDigits
 *
 * @arg {Number} value
 */
export default (value) => {
	if (!isFloat(value) || value === 0) {
		return 0;
	}

	if (Math.abs(value) < PERFORMANCE_CUTOFF) {
		value += '';

		return value.slice(value.indexOf('e') + 1) * -1;
	}

	let e = 1;
	let digits = 0;
	let comp = value * e;

	while (Math.floor(comp) !== comp) {
		++digits;
		comp = value * (e *= 10);
	}

	return digits;
}
