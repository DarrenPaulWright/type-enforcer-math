import displayValue from 'display-value';
import { assert } from 'type-enforcer';
import { fractionDigits } from '../../index.js';

describe('fractionDigits', () => {
	[
		[Infinity, 0],
		[0, 0],
		[22346, 0],
		[2.000, 0], // eslint-disable-line unicorn/no-zero-fractions
		[2.123, 3],
		[2.123456, 6],
		[123.1234567891, 10],
		[9.999999, 6],
		[1e-1, 1],
		[1e-10, 10],
		[1e-20, 20],
		[1e-30, 30],
		[1e-40, 40],
		[1e-50, 50],
		[1e-60, 60],
		[1e-70, 70],
		[1e-80, 80],
		[1e-90, 90],
		[1e-100, 100],
		[1e-200, 200],
		[1e-300, 300],
		[5e-324, 324]
	]
		.forEach((data) => {
			it(`should return ${displayValue(data[1])} for ${displayValue(data[0])}`, () => {
				assert.is(fractionDigits(data[0]), data[1]);
			});

			it(`should return ${displayValue(data[1])} for -${displayValue(data[0])}`, () => {
				assert.is(fractionDigits(-data[0]), data[1]);
			});
		});
});
