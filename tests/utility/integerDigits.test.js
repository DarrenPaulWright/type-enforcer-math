import { assert } from 'chai';
import { integerDigits } from '../../index.js';

describe.only('fractionDigits', () => {
	it('should return 5 for 1e4', () => {
		assert.strictEqual(integerDigits(1e4), 5);
	});

	it('should return 5 for an integer with 5 digits', () => {
		assert.strictEqual(integerDigits(22346), 5);
	});

	it('should return 5 for a negative integer with 5 digits', () => {
		assert.strictEqual(integerDigits(-22346), 5);
	});

	it('should return 1 for 2.000', () => {
		assert.strictEqual(integerDigits(2.000), 1);
	});

	it('should return 1 for 2.123', () => {
		assert.strictEqual(integerDigits(2.123), 1);
	});

	it('should return 0 for 0.123', () => {
		assert.strictEqual(integerDigits(0.123), 0);
	});

	it('should return 0 for -0.123', () => {
		assert.strictEqual(integerDigits(-0.123), 0);
	});

	it('should return 0 for 0', () => {
		assert.strictEqual(integerDigits(0), 0);
	});
});
