import displayValue from 'display-value';
import { assert } from 'type-enforcer';
import { integerDigits } from '../../index.js';

describe('integerDigits', () => {
	[
		[Infinity, 0],
		[0, 0],
		[0.123, 0],
		[1e4, 5],
		[22346, 5],
		[2.000, 1], // eslint-disable-line unicorn/no-zero-fractions
		[2.123, 1],
		[9.999999, 1],
		[10, 2],
		[1e10, 11],
		[1e20, 21],
		[1e30, 31],
		[1e40, 41],
		[1e50, 51],
		[1e60, 61],
		[1e70, 71],
		[1e80, 81],
		[1e90, 91],
		[1e100, 101],
		[1e200, 201],
		[1e300, 301]
	]
		.forEach((data) => {
			it(`should return ${displayValue(data[1])} for ${displayValue(data[0])}`, () => {
				assert.is(integerDigits(data[0]), data[1]);
			});

			it(`should return ${displayValue(data[1])} for -${displayValue(data[0])}`, () => {
				assert.is(integerDigits(-data[0]), data[1]);
			});
		});
});
