import { benchSettings } from 'karma-webpack-bundle';
import { enforce } from '../index.js';
import { localTestTypes } from '../tests/helpers/testValues.js';

/* eslint-disable no-unused-vars */
localTestTypes.forEach((data) => {
	suite(`enforce.${data.name}`, () => {
		const enforceFunction = enforce[data.name];
		const trueValue = data.true[0];
		const falseValue = data.false[0];
		const altValue = data.true[1];
		const coerceTrueValue = data.coerceTrue[0];
		const coerceFalseValue = data.coerceFalse[0];
		let sandbox = null;

		benchmark('true', () => {
			sandbox = enforceFunction(trueValue, altValue);
		}, benchSettings);

		benchmark('false', () => {
			sandbox = enforceFunction(falseValue, altValue);
		}, benchSettings);

		if (data.coerceTrue.length !== 0) {
			benchmark('coerce true', () => {
				sandbox = enforceFunction(coerceTrueValue, altValue, true);
			}, benchSettings);
		}

		if (data.coerceFalse.length !== 0) {
			benchmark('coerce false', () => {
				sandbox = enforceFunction(coerceFalseValue, altValue, true);
			}, benchSettings);
		}
	});
});
