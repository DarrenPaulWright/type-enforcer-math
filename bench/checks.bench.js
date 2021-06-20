import { benchSettings } from 'karma-webpack-bundle';
import { is } from '../index.js';
import { localTestTypes } from '../tests/helpers/testValues.js';

/* eslint-disable no-unused-vars */
localTestTypes.forEach((data) => {
	suite(`is.${data.name}`, () => {
		const check = is[data.name];
		const trueValue = data.true[0];
		const falseValue = data.false[0];
		const coerceTrueValue = data.coerceTrue[0];
		const coerceFalseValue = data.coerceFalse[0];
		let sandbox = null;

		benchmark('true', () => {
			sandbox = check(trueValue);
		}, benchSettings);

		benchmark('false', () => {
			sandbox = check(falseValue);
		}, benchSettings);

		if (data.coerceTrue.length !== 0) {
			benchmark('coerce true', () => {
				sandbox = check(coerceTrueValue, true);
			}, benchSettings);
		}

		if (data.coerceFalse.length !== 0) {
			benchmark('coerce false', () => {
				sandbox = check(coerceFalseValue, true);
			}, benchSettings);
		}
	});
});
