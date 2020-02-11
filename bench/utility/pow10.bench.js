import { benchSettings } from 'karma-webpack-bundle';
import { repeat } from 'object-agent';
import { pow10 } from '../../index.js';

suite('power', () => {
	let sandbox;
	const times = 12;

	repeat(times, (num) => {
		num *= num;

		benchmark('Math.pow ' + num, () => {
			sandbox = Math.pow(10, num);
		}, benchSettings);

		benchmark('Math.pow ' + -num, () => {
			sandbox = Math.pow(10, -num);
		}, benchSettings);
	});

	repeat(times, (num) => {
		num *= num;

		benchmark('pow10 ' + num, () => {
			sandbox = pow10(num);
		}, benchSettings);

		benchmark('pow10 ' + -num, () => {
			sandbox = pow10(-num);
		}, benchSettings);
	});
});
