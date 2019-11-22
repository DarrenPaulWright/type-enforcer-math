import { assert } from 'chai';
import { multiTest } from 'type-enforcer-test-helper';
import { Point, Vector } from '../index';
import { vectorData } from './testValues';

describe('Vector', () => {
	describe('init', () => {
		it('should instantiate without any arguments', () => {
			const vector = new Vector();

			assert.deepEqual(vector.start(), new Point(0, 0));
		});

		it('should accept a start', () => {
			const vector = new Vector([1, 2]);

			assert.deepEqual(vector.start(), new Point(1, 2));
		});

		it('should accept an end', () => {
			const vector = new Vector([1, 2], [5, 4]);

			assert.deepEqual(vector.end(), new Point(5, 4));
		});

		it('should accept Points', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			assert.deepEqual(vector.end(), new Point(5, 4));
		});

		it('should accept Objects', () => {
			const vector = new Vector({
				x: 1,
				y: 2
			}, {
				x: 5,
				y: 4
			});

			assert.deepEqual(vector.end(), new Point(5, 4));
		});

		it('should accept an array', () => {
			const vector = new Vector([[1, 2], [3, 4]]);

			assert.deepEqual(vector.end(), new Point(3, 4));
		});

		it('should accept a valid string', () => {
			const vector = new Vector('[[1,2],[3,4]]');

			assert.deepEqual(vector.end(), new Point(3, 4));
		});

		it('should accept another vector', () => {
			const vector = new Vector(new Vector('[[1,2],[3,4]]'));

			assert.deepEqual(vector.end(), new Point(3, 4));
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => Vector.isValid(value);

		multiTest({
			values: vectorData.true,
			test: testCallback,
			assertion: 'isTrue'
		});

		multiTest({
			values: vectorData.coerceTrue,
			test: testCallback,
			assertion: 'isTrue'
		});

		multiTest({
			values: vectorData.coerceFalse,
			test: testCallback,
			assertion: 'isFalse'
		});
	});

	describe('.start', () => {
		it('should accept an Array when start is set', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			vector.start([5, 6]);

			assert.deepEqual(vector.start(), new Point(5, 6));
		});

		it('should accept an Object when start is set', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			vector.start({
				x: 1,
				y: 2
			});

			assert.deepEqual(vector.start(), new Point(1, 2));
		});

		it('should set the length when start is set', () => {
			const vector = new Vector([1, 1], [2, 2]);

			assert.deepEqual(vector.length(), Math.sqrt(2));

			vector.start(new Point(5, 6));

			assert.deepEqual(vector.length(), 5);
		});

		it('should set the angle when start is set', () => {
			const vector = new Vector([1, 1], [2, 2]);

			assert.deepEqual(vector.angle(), Math.PI / 4);

			vector.start(new Point(3, 3));

			assert.deepEqual(vector.angle(), Math.PI * 5 / 4);
		});

		it('should set the offset when start is set', () => {
			const vector = new Vector([1, 1], [3, 5]);

			assert.deepEqual(vector.offset(), new Point(2, 4));

			vector.start(new Point(3, -1));

			assert.deepEqual(vector.offset(), new Point(0, 6));
		});
	});

	describe('.end', () => {
		it('should accept an Array when end is set', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			vector.end([5, 6]);

			assert.deepEqual(vector.end(), new Point(5, 6));
		});

		it('should accept an Object when end is set', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			vector.end({
				x: 1,
				y: 2
			});

			assert.deepEqual(vector.end(), new Point(1, 2));
		});

		it('should set the length when end is set', () => {
			const vector = new Vector([1, 1], [2, 2]);

			assert.deepEqual(vector.length(), Math.sqrt(2));

			vector.end(new Point(4, 5));

			assert.deepEqual(vector.length(), 5);
		});

		it('should set the angle when end is set', () => {
			const vector = new Vector([1, 1], [2, 2]);

			assert.deepEqual(vector.angle(), Math.PI / 4);

			vector.end(new Point(3, -1));

			assert.deepEqual(vector.angle(), Math.PI * 7 / 4);
		});

		it('should set the offset when end is set', () => {
			const vector = new Vector([1, 1], [3, 5]);

			assert.deepEqual(vector.offset(), new Point(2, 4));

			vector.end(new Point(3, -1));

			assert.deepEqual(vector.offset(), new Point(2, -2));
		});
	});

	describe('.invert', () => {
		it('should switch the start and end when invert is called', () => {
			const vector = new Vector([1, 1], [3, 5]);

			vector.invert();

			assert.deepEqual(vector.start(), new Point(3, 5));
			assert.deepEqual(vector.end(), new Point(1, 1));
		});

		it('should set the angle when invert is called', () => {
			const vector = new Vector([1, 1], [2, 2]);

			assert.deepEqual(vector.angle(), Math.PI / 4);

			vector.invert();

			assert.deepEqual(vector.angle(), Math.PI * 5 / 4);
		});

		it('should set the offset when invert is called', () => {
			const vector = new Vector([1, 1], [3, 5]);

			assert.deepEqual(vector.offset(), new Point(2, 4));

			vector.invert();

			assert.deepEqual(vector.offset(), new Point(-2, -4));
		});
	});

	describe('.length', () => {
		it('should set the length when instantiated', () => {
			const vector = new Vector([1, 2], [1, 4]);

			assert.equal(vector.length(), 2);
		});

		it('should set the end when length is set', () => {
			const vector = new Vector([1, 1], [5, 1]);

			vector.length(2);

			assert.deepEqual(vector.end(), new Point(3, 1));
		});

		it('should set the offset when angle is set', () => {
			const vector = new Vector([1, 1], [5, 1]);

			assert.deepEqual(vector.offset(), new Point(4, 0));

			vector.length(2);

			assert.deepEqual(vector.offset(), new Point(2, 0));
		});
	});

	describe('.angle', () => {
		it('should set the angle when instantiated', () => {
			const vector = new Vector([1, 1], [2, 2]);

			assert.equal(vector.angle(), Math.PI / 4);
		});

		it('should set the end when angle is set', () => {
			const vector = new Vector([1, 1], [5, 1]);

			vector.angle(Math.PI / 2);

			assert.deepEqual(vector.end(), new Point(1.0000000000000002, 5));
		});

		it('should set the offset when angle is set', () => {
			const vector = new Vector([1, 1], [5, 1]);

			assert.deepEqual(vector.offset(), new Point(4, 0));

			vector.angle(Math.PI / 2);

			assert.deepEqual(vector.offset(), new Point(2.220446049250313e-16, 4));
		});

		it('should normalize the angle when greater than 2 * PI', () => {
			const vector = new Vector([1, 1], [3, 5]);

			vector.angle(Math.PI * 2.5);

			assert.equal(vector.angle(), Math.PI / 2);
		});

		it('should normalize the angle when less than 0', () => {
			const vector = new Vector([1, 1], [3, 5]);

			vector.angle(-Math.PI * 5 / 2);

			assert.equal(vector.angle(), Math.PI * 3 / 2);
		});
	});

	describe('.offset', () => {
		it('should set the offset when instantiated', () => {
			const vector = new Vector([1, 1], [3, 5]);

			assert.deepEqual(vector.offset(), new Point(2, 4));
		});

		it('should accept an Array when offset is set', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			vector.offset([5, 6]);

			assert.deepEqual(vector.offset(), new Point(5, 6));
		});

		it('should accept an Object when offset is set', () => {
			const vector = new Vector(new Point(1, 2), new Point(5, 4));

			vector.offset({
				x: 1,
				y: 2
			});

			assert.deepEqual(vector.offset(), new Point(1, 2));
		});

		it('should set the end when offset is set', () => {
			const vector = new Vector([1, 1], [3, 5]);

			assert.deepEqual(vector.end(), new Point(3, 5));

			vector.offset(new Point(5, 6));

			assert.deepEqual(vector.end(), new Point(6, 7));
		});

		it('should set the length when offset is set', () => {
			const vector = new Vector([1, 1], [3, 5]);

			assert.deepEqual(vector.length(), Math.sqrt(20));

			vector.offset(new Point(5, 6));

			assert.deepEqual(vector.length(), Math.sqrt(61));
		});

		it('should set the angle when offset is set', () => {
			const vector = new Vector([1, 1], [1, 5]);

			assert.equal(vector.angle(), Math.PI / 2);

			vector.offset(new Point(5, 5));

			assert.equal(vector.angle(), Math.PI / 4);
		});
	});

	describe('.toString', () => {
		it('should return a string of the vector', () => {
			assert.equal(new Vector().toString(), '[[0,0],[0,0]]');
		});

		it('should return a string of the vector if custom', () => {
			assert.equal(new Vector([1, 2], [3, 4]).toString(), '[[1,2],[3,4]]');
		});
	});

	describe('.valueOf', () => {
		it('should return a string of the vector', () => {
			assert.deepEqual(new Vector().valueOf(), [[0, 0], [0, 0]]);
		});
		
		it('should return a string of the vector if custom', () => {
			assert.deepEqual(new Vector([1, 2], [3, 4]).valueOf(), [[1, 2], [3, 4]]);
		});
	});

	describe('.isSame', () => {
		it('should return false if not a Vector', () => {
			assert.isFalse(new Vector([1, 2], [3, 4]).isSame('something'));
		});
		it('should return true if the same Vector', () => {
			assert.isTrue(new Vector([1, 2], [3, 4]).isSame(new Vector([1, 2], [3, 4])));
		});
		it('should return false if a different Vector', () => {
			assert.isFalse(new Vector([1, 2], [3, 4]).isSame(new Vector([5, 2], [3, 4])));
		});
	});
});
