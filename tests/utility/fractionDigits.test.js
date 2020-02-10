import { assert } from 'chai';
import { fractionDigits } from '../../index.js';

describe.only('fractionDigits', () => {
	it('should return 0 for an integer', () => {
		assert.strictEqual(fractionDigits(22346), 0);
	});

	it('should return 0 for 2.000', () => {
		assert.strictEqual(fractionDigits(2.000), 0);
	});

	it('should return 3 for 2.123', () => {
		assert.strictEqual(fractionDigits(2.123), 3);
	});

	it('should return 6 for 2.123456', () => {
		assert.strictEqual(fractionDigits(2.123456), 6);
	});
});
