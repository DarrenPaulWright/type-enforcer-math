import { benchSettings } from 'karma-webpack-bundle';
import { repeat } from 'object-agent';
import { pow10 } from '../../index.js';

/* eslint-disable no-unused-vars */
suite('power', () => {
	let sandbox = null;
	const times = 12;

	repeat(times, (number) => {
		number *= number;

		benchmark('Math.pow ' + number, () => {
			sandbox = Math.pow(10, number);
		}, benchSettings);

		benchmark('Math.pow ' + -number, () => {
			sandbox = Math.pow(10, -number);
		}, benchSettings);
	});

	repeat(times, (number) => {
		number *= number;

		benchmark('pow10 ' + number, () => {
			sandbox = pow10(number);
		}, benchSettings);

		benchmark('pow10 ' + -number, () => {
			sandbox = pow10(-number);
		}, benchSettings);
	});
});
