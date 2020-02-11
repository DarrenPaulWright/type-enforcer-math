import { benchSettings } from 'karma-webpack-bundle';
import { integerDigits } from '../../index.js';

suite('integerDigits', () => {
	let sandbox;

	benchmark('infinity', () => {
		sandbox = integerDigits(Infinity);
	}, benchSettings);

	benchmark('0', () => {
		sandbox = integerDigits(0);
	}, benchSettings);

	benchmark('0 (fraction)', () => {
		sandbox = integerDigits(0.123);
	}, benchSettings);

	benchmark('2 digits', () => {
		sandbox = integerDigits(12);
	}, benchSettings);

	benchmark('4 digits', () => {
		sandbox = integerDigits(1234);
	}, benchSettings);

	benchmark('6 digits', () => {
		sandbox = integerDigits(123456);
	}, benchSettings);

	benchmark('8 digits', () => {
		sandbox = integerDigits(12345678);
	}, benchSettings);

	benchmark('10 digits', () => {
		sandbox = integerDigits(1234567891);
	}, benchSettings);

	benchmark('1e20', () => {
		sandbox = integerDigits(1e20);
	}, benchSettings);

	benchmark('1e100', () => {
		sandbox = integerDigits(1e100);
	}, benchSettings);

	benchmark('1e200', () => {
		sandbox = integerDigits(1e200);
	}, benchSettings);

	benchmark('1e300', () => {
		sandbox = integerDigits(1e300);
	}, benchSettings);
});
