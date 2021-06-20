import { testCheck } from 'type-enforcer-test-helper';
import { is, isPoint, isVector } from '../index.js';
import { pointData, vectorData } from './helpers/testValues.js';

describe('checks', () => {
	describe('isPoint', () => {
		testCheck(pointData, isPoint, is);
	});

	describe('isVector', () => {
		testCheck(vectorData, isVector, is);
	});
});
