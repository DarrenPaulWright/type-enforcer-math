import { benchSettings } from 'karma-webpack-bundle';
import { abbrNumber } from '../../index.js';

suite('abbrNumber', () => {
	let sandbox;

	benchmark('0', () => {
		sandbox = abbrNumber(0);
	}, benchSettings);

	benchmark('> 1', () => {
		sandbox = abbrNumber(123456.123456);
	}, benchSettings);

	benchmark('< 1', () => {
		sandbox = abbrNumber(0.00123);
	}, benchSettings);

	benchmark('precision 3', () => {
		sandbox = abbrNumber(123456.123456, {precision: 3});
	}, benchSettings);

	benchmark('with suffix', () => {
		sandbox = abbrNumber(123456.123456, {suffix: 's'});
	}, benchSettings);
});
