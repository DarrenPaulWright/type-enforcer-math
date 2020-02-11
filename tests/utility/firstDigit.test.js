import { assert } from 'chai';
import displayValue from 'display-value';
import { firstDigit } from '../../index.js';

describe('firstDigit', () => {
	[
		[Infinity, 0],
		[0, 0],
		[0.123, 0],
		[0.0123, -1],
		[0.00123, -2],
		[0.000123, -3],
		[0.0000123, -4],
		[1e4, 5],
		[22346, 5],
		[2.000, 1],
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
		[1e300, 301],
		[1e-1, 0],
		[1e-11, -10],
		[1e-21, -20],
		[1e-31, -30],
		[1e-41, -40],
		[1e-51, -50],
		[1e-61, -60],
		[1e-71, -70],
		[1e-81, -80],
		[1e-91, -90],
		[1e-101, -100],
		[1e-201, -200],
		[1e-301, -300],
		[5e-324, -323]
	]
		.forEach((data) => {
			it(`should return ${displayValue(data[1])} for ${displayValue(data[0])}`, () => {
				assert.strictEqual(firstDigit(data[0]), data[1]);
			});

			it(`should return ${displayValue(data[1])} for -${displayValue(data[0])}`, () => {
				assert.strictEqual(firstDigit(-data[0]), data[1]);
			});
		});
});
