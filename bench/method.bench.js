import { benchSettings } from 'karma-webpack-bundle';
import { forOwn } from 'object-agent';
import { methodPoint } from '../index.js';

/* eslint-disable no-unused-vars */
suite('methodPoint', () => {
	let sandbox = null;

	forOwn({
		none: null,
		set: {
			set(value) {
				sandbox = value;
			}
		},
		setGet: {
			set(value) {
				sandbox = value;
			},
			get() {
				return 2;
			}
		},
		setGetOther: {
			set(value) {
				sandbox = value;
			},
			get() {
				return 2;
			},
			other: [null, Number]
		},
		setGetOtherBefore: {
			before(value) {
				sandbox = value;
			},
			set(value) {
				sandbox = value;
			},
			get() {
				return 2;
			},
			other: [null, Number]
		}
	}, (value, key) => {
		class Widget {}

		Widget.prototype[key] = methodPoint(value);

		const widget = new Widget();

		benchmark(`${key} init`, () => {
			methodPoint(value);
		}, benchSettings);

		benchmark(`${key} get`, () => {
			widget[key]();
		}, benchSettings);

		benchmark(`${key} set`, () => {
			widget[key]('asdf');
		}, benchSettings);

		benchmark(`${key} set other`, () => {
			widget[key](3);
		}, benchSettings);

		benchmark(`${key} set bad`, () => {
			widget[key]([]);
		}, benchSettings);
	});
});
