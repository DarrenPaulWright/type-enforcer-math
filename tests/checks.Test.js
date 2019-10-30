import { testCheck } from 'type-enforcer-test-helper';
import { is, isPoint, isVector } from '../index';
import { pointData, vectorData } from './testValues';

describe('checks', () => {
	describe('isPoint', () => {
		testCheck(pointData, isPoint, is);
	});

	describe('isVector', () => {
		testCheck(vectorData, isVector, is);
	});
});
