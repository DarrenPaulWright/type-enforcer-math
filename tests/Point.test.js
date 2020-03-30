import { assert } from 'type-enforcer';
import { multiTest } from 'type-enforcer-test-helper';
import { Point } from '../index.js';
import { pointData } from './testValues.js';

describe('Point', () => {
	describe('Init', () => {
		it('should default 0,0', () => {
			const point = new Point();

			assert.is(point.x, 0);
			assert.is(point.y, 0);
		});

		it('should accept an array', () => {
			const point = new Point([1, 2]);

			assert.is(point.x, 1);
			assert.is(point.y, 2);
		});

		it('should accept an array with numeric strings', () => {
			const point = new Point(['1', '2']);

			assert.is(point.x, 1);
			assert.is(point.y, 2);
		});

		it('should accept an object with x and y', () => {
			const point = new Point({
				x: 1,
				y: 2
			});

			assert.is(point.x, 1);
			assert.is(point.y, 2);
		});

		it('should accept an object with x and y numeric strings', () => {
			const point = new Point({
				x: '1',
				y: '2'
			});

			assert.is(point.x, 1);
			assert.is(point.y, 2);
		});

		it('should accept two numbers', () => {
			const point = new Point(1, 2);

			assert.is(point.x, 1);
			assert.is(point.y, 2);
		});

		it('should accept a comma separated string', () => {
			const point = new Point('1,2');

			assert.is(point.x, 1);
			assert.is(point.y, 2);
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => Point.isValid(value);
		multiTest({
			values: pointData.true,
			test: testCallback,
			assertion: 'true'
		});
		multiTest({
			values: pointData.coerceTrue,
			test: testCallback,
			assertion: 'true'
		});
		multiTest({
			values: pointData.coerceFalse,
			test: testCallback,
			assertion: 'false'
		});
	});

	describe('.normalizeAngle', () => {
		it('should change 2 * PI to 0', () => {
			assert.is(Point.normalizeAngle(Math.PI * 2), 0);
		});

		it('should change -2 * PI to 0', () => {
			assert.is(Point.normalizeAngle(-Math.PI * 2), Math.PI * 2);
		});

		it('should normalize the angle when greater than 2 * PI', () => {
			assert.is(Point.normalizeAngle(Math.PI * 2.5), Math.PI / 2);
		});

		it('should normalize the angle when multiple times greater than 2 * PI', () => {
			assert.is(Math.round(Point.normalizeAngle(Math.PI * 10.5) * 1000000), Math.round((Math.PI / 2) * 1000000));
		});

		it('should normalize the angle when less than 0', () => {
			assert.is(Point.normalizeAngle(-Math.PI * 5 / 2), Math.PI * 3 / 2);
		});

		it('should normalize the angle when multiple times less than 0', () => {
			assert.is(Math.round(Point.normalizeAngle(-Math.PI * 11) * 1000000), Math.round(Math.PI * 1000000));
		});
	});

	describe('.toString', () => {
		it('should output a string', () => {
			const point = new Point([1, 2]);

			assert.is(point.toString(), '1,2');
		});
	});

	describe('.isSame', () => {
		it('should return true when a Point that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.is(point.isSame(new Point(1, 2)), true);
		});

		it('should return true when a String that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.is(point.isSame('1,2'), true);
		});

		it('should return true when an array that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.is(point.isSame([1, 2]), true);
		});

		it('should return true when an object that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.is(point.isSame({
				x: 1,
				y: 2
			}), true);
		});

		it('should NOT return true when a Point that has a different x value is provided', () => {
			const point = new Point(1, 2);

			assert.is(point.isSame(new Point(3, 2)), false);
		});

		it('should NOT return true when a Point that has different values is provided', () => {
			const point = new Point(1, 2);

			assert.is(point.isSame(new Point(3, 4)), false);
		});
	});

	describe('.add', () => {
		it('should return a new Point with appropriate values', () => {
			const point = new Point(1, 2);

			assert.equal(point.add(new Point(3, 4)), new Point(4, 6));
		});
	});

	describe('.subtract', () => {
		it('should return a new Point with appropriate values', () => {
			const point = new Point(1, 2);

			assert.equal(point.subtract(new Point(3, 4)), new Point(-2, -2));
		});
	});

	describe('.multiply', () => {
		it('should return a new Point with appropriate values', () => {
			const point = new Point(7, 2);

			assert.equal(point.multiply(new Point(3, 4)), new Point(21, 8));
		});
	});

	describe('.round', () => {
		it('should return a new Point rounded to 3 fraction digts', () => {
			const point = new Point(7.123456789, 21234.123456789);

			assert.equal(point.round(3), new Point(7.123, 21234.123));
		});

		it('should return a new Point rounded to 3 significant digts', () => {
			const point = new Point(7.123456789, 21234.123456789);

			assert.equal(point.round(null, 3), new Point(7.12, 21200));
		});
	});

	describe('.distance', () => {
		it('should return a Number with appropriate value', () => {
			const point = new Point(3, 4);

			assert.is(point.distance(), 5);
		});
	});

	describe('.angle', () => {
		it('should return a Number with appropriate value', () => {
			assert.is(new Point(0, 4).angle(), Math.PI / 2);
		});

		it('should return PI *3 / 2 when {x:0, y:-4} is passed in', () => {
			assert.is(new Point(0, -4).angle(), Math.PI * 3 / 2);
		});
	});

	describe('.pointAtDistance', () => {
		it('should return a Point with appropriate value', () => {
			const point = new Point(4, 0);

			assert.equal(point.pointAtDistance(Math.PI / 2, 3), new Point(4, 3));
		});
	});

	describe('.clone', () => {
		it('should return a Point with the same value', () => {
			const point = new Point(4, 0);

			assert.equal(point.clone(), new Point(4, 0));
		});
	});
});
