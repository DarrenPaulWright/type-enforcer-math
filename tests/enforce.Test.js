import { testEnforce } from 'type-enforcer-test-helper';
import { enforce, enforcePoint, enforceVector, Point, Vector } from '../index';
import { pointData, vectorData } from './testValues';

describe('enforce', () => {
	describe('.point', () => {
		testEnforce(pointData, enforcePoint, enforce, (item) => new Point(item));
	});

	describe('.vector', () => {
		testEnforce(vectorData, enforceVector, enforce, (item) => new Vector(item));
	});
});
