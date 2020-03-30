import { assert } from 'type-enforcer';
import { round } from '../../index.js';

describe('round', () => {
	it('should round a float to an int by default', () => {
		assert.is(round(12.34), 12);
	});

	it('should return 0 for 0', () => {
		assert.is(round(0), 0);
	});

	it('should round a float to a specified number of fraction digits', () => {
		assert.is(round(1.123456789, 2), 1.12);
		assert.is(round(1.123456789, 3), 1.123);
		assert.is(round(1.123456789, 5), 1.12346);
		assert.is(round(1.123456789, -5), 1);
	});

	it('should round an integer to a specified precision', () => {
		assert.is(round(123456789, 0, 0), 123456789);
		assert.is(round(123456789, 0, 2), 120000000);
		assert.is(round(123456789, 0, 6), 123457000);
		assert.is(round(123456789, null, 12), 123456789);
	});

	it('should round a float > 1 to a specified precision', () => {
		assert.is(round(123456789.123456789, 0, 0), 123456789);
		assert.is(round(123456789.123456789, 0, 2), 120000000);
		assert.is(round(123456789.123456789, 0, 6), 123457000);
		assert.is(round(123456789.123456789, null, 12), 123456789.123);
		assert.is(round(123.123456789, null, 5), 123.12);
		assert.is(round(123.123456789, null, 8), 123.12346);
		assert.is(round(123.123456789, 8, 8), 123.12346);
		assert.is(round(123.123456789, 2, 8), 123.12);
	});

	it('should round a float < 1 to a specified precision', () => {
		assert.is(round(0.001, null, 2), 0.001);
		assert.is(round(0.000001, null, 2), 0.000001);
		assert.is(round(0.000000001, null, 2), 0.000000001);
		assert.is(round(0.123456789, null, 3), 0.123);
		assert.is(round(0.123456789, null, 6), 0.123457);
		assert.is(round(0.123456789, 6, 6), 0.123457);
		assert.is(round(0.123456789, 3, 6), 0.123);
	});

});
