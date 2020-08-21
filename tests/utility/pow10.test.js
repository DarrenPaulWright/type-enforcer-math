import displayValue from 'display-value';
import { repeat } from 'object-agent';
import { assert } from 'type-enforcer';
import { pow10 } from '../../index.js';

describe('pow10', () => {
	repeat(50, (num) => {
		num *= 3;
		let pos = Math.pow(10, num);
		let neg = Math.pow(10, -num);

		it(`should return ${displayValue(pos)} when given ${displayValue(num)}`, () => {
			assert.moreThan(pow10(num), pos * 0.999);
			assert.lessThan(pow10(num), pos * 1.001);
		});

		it(`should return ${displayValue(neg)} when given ${displayValue(-num)}`, () => {
			assert.moreThan(pow10(-num), neg * 0.999);
			assert.lessThan(pow10(-num), neg * 1.001);
		});
	});
});
