import { testMethod } from 'type-enforcer-test-helper';
import { method, methodPoint, methodVector, Point, Vector } from '../index';
import { pointData, vectorData } from './testValues';

describe('method', () => {
	describe('.point', () => {
		testMethod({
			...pointData,
			init: new Point(),
			coerce: [{
				value: '5,6',
				coerced: new Point([5, 6])
			}]
		}, methodPoint, method);

		describe('(stringify)', () => {
			testMethod({
				name: 'point',
				init: '0,0',
				true: ['1,2', '3,4'],
				false: [],
				coerceTrue: [],
				extraProps: {
					stringify: true
				}
			}, methodPoint, method);
		});
	});

	describe('.vector', () => {
		testMethod({
			...vectorData,
			init: new Vector(),
			coerce: [{
				value: '[[3,4],[5,6]]',
				coerced: new Vector('[[3,4],[5,6]]')
			}]
		}, methodVector, method);

		describe('(stringify)', () => {
			testMethod({
				name: 'vector',
				init: '[[0,0],[0,0]]',
				true: ['[[1,2],[3,4]]', '[[5,6],[7,8]]'],
				false: [],
				coerceTrue: [],
				extraProps: {
					stringify: true
				}
			}, methodVector, method);
		});
	});
});

