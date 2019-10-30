import { difference, testTypes, testValues } from 'type-enforcer-test-helper';
import { Point, Vector } from '../index';

export const validPoints = [new Point(1, 2), new Point([3, 4])];
export const validVectors = [new Vector([1, 2], [3, 4]), new Vector([3, 4], [5, 6])];

validPoints.concat(validVectors)
	.forEach((value) => {
		testValues.push(value);
	});

export const pointData = {
	value: Point,
	name: 'point',
	true: validPoints,
	false: difference(testValues, validPoints),
	coerceTrue: ['1,2', [1, 2], ['1', '2'], {
		x: '1',
		y: '2'
	}, {
		x: 1,
		y: 2
	}],
	coerceFalse: difference(testValues, validPoints)
};
export const vectorData = {
	value: Vector,
	name: 'vector',
	true: validVectors,
	false: difference(testValues, validVectors),
	coerceTrue: ['[[1,2],[3,4]]'],
	coerceFalse: [].concat(difference(testValues, validVectors), ['[[1,2],[3,4],[5,6]]', '[[1,2,7],[3,4,8]]'])
};

testTypes.push(pointData);
testTypes.push(vectorData);
