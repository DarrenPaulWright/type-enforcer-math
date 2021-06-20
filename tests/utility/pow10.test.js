import displayValue from 'display-value';
import { repeat } from 'object-agent';
import { assert } from 'type-enforcer';
import { pow10 } from '../../index.js';

describe('pow10', () => {
	repeat(50, (number) => {
		number *= 3;
		const pos = Math.pow(10, number);
		const neg = Math.pow(10, -number);

		it(`should return ${displayValue(pos)} when given ${displayValue(number)}`, () => {
			assert.moreThan(pow10(number), pos * 0.999);
			assert.lessThan(pow10(number), pos * 1.001);
		});

		it(`should return ${displayValue(neg)} when given ${displayValue(-number)}`, () => {
			assert.moreThan(pow10(-number), neg * 0.999);
			assert.lessThan(pow10(-number), neg * 1.001);
		});
	});
});
