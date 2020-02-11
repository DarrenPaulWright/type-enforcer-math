/**
 * Performance optimized version of Math.pow(10, n) for integers (up to 2x improvement for certain values)
 *
 * @function pow10
 *
 * @arg {int} n - Must be an int!
 *
 * @returns {int}
 */
export default (n) => {
	if (n > 100 || n < -25) {
		return Math.pow(10, n);
	}

	let result = 1;

	if (n > 0) {
		while (n-- > 0) {
			result *= 10;
		}
	}
	else if (n !== 0) {
		while (n++ < 0) {
			result /= 10;
		}
	}

	return result;
};
