import { benchSettings } from 'karma-webpack-bundle';
import { round } from '../../index.js';
import { pow10 } from '../../src/utility/round.js';

suite('round', () => {
	let sandbox;

	benchmark('123.123', () => {
		sandbox = round(123.123);
	}, benchSettings);

	benchmark('2 fractionDigits', () => {
		sandbox = round(123.123456, 2);
	}, benchSettings);

	benchmark('2 precision', () => {
		sandbox = round(123.123456, null, 2);
	}, benchSettings);

	benchmark('both', () => {
		sandbox = round(123.1234, 2, 2);
	}, benchSettings);
});
