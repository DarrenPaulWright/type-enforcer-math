import displayValue from 'display-value';
import { assert } from 'type-enforcer';
import { abbrNumber } from '../../index.js';

describe('abbrNumber', () => {
	it('should return "0" for 0', () => {
		assert.is(abbrNumber(0), '0');
	});

	[
		[1e-6, '1μ'],
		[-1e-6, '-1μ'],
		[7e-6, '7μ'],
		[-7e-6, '-7μ'],
		[1e-5, '10μ'],
		[-1e-5, '-10μ'],
		[1e-4, '100μ'],
		[-1e-4, '-100μ'],
		[9e-4, '900μ'],
		[-9e-4, '-900μ'],
		// > 1e-3
		[1e-3, '1m'],
		[-1e-3, '-1m'],
		[0.007, '7m'],
		[0.07, '70m'],
		[0.1, '100m'],
		[0.1234, '120m'],
		// > 1
		[0.99999, '1'],
		[0.994, '990m'],
		[1, '1'],
		[1.234, '1.2'],
		[12.34, '12'],
		[123.4, '120'],
		[500, '500'],
		[990, '990'],
		// > 1000
		[1234, '1k', { precision: 1 }],
		[1234, '1.2k'],
		[-1234, '-1.2k'],
		[1234, '1.23k', { precision: 3 }],
		[1234, '1.234k', { precision: 4 }],
		// > 1e6
		[1.2e7, '12M'],
		[-1.2e7, '-12M'],
		// > 1e9
		[1.2e10, '12G'],
		[-1.2e10, '-12G'],
		// > 1e12
		[1.2e13, '12T'],
		[-1.2e13, '-12T'],
		// > 1e15
		[1.2e16, '12P'],
		[-1.2e16, '-12P'],
		// > 1e18
		[1.2e19, '12E'],
		[-1.2e19, '-12E'],
		// > 1e21
		[1.2e22, '12Z'],
		[-1.2e22, '-12Z'],
		// > 1e24
		[1.2e25, '12Y'],
		[-1.2e25, '-12Y']
	]
		.forEach((data) => {
			if (data.length > 2) {
				it(`should return ${displayValue(data[1])} for ${displayValue(data[0])} and settings ${displayValue(data[2])}`, () => {
					assert.is(abbrNumber(data[0], data[2]), data[1]);
				});
			}
			else {
				it(`should return ${displayValue(data[1])} for ${displayValue(data[0])}`, () => {
					assert.is(abbrNumber(data[0]), data[1]);
				});
			}

			const settings = {
				...data[2] || {},
				suffix: 's'
			};
			it(`should return ${displayValue(data[1] + 's')} for ${displayValue(data[0])} and settings ${displayValue(settings)}`, () => {
				assert.is(abbrNumber(data[0], settings), data[1] + 's');
			});
		});
});
