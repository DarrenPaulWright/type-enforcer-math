import { enforceNumber, isArray, isString, methodNumber, PrivateVars } from 'type-enforcer';
import enforcePoint from './enforcer/enforcePoint.js';
import methodPoint from './methods/methodPoint.js';
import Point from './Point.js';

const _ = new PrivateVars();

/**
 * @class Vector
 * @classdesc A Euclidean Vector model.
 * @example
 * ``` javascript
 * import { Vector } from 'type-enforcer-math';
 * ```
 *
 * @arg {*} [args] - Accepts:
 * <br>- A start and end point (or values that can be coerced into points)
 * <br>- An array of two points (or values that can be coerced into points)
 * <br>- Another vector instance
 * <br>- A single start point (or value that can be coerced into a point)
 */
export default class Vector {
	constructor(start, end) {
		if (start instanceof Vector) {
			_.set(this, Object.assign({}, _(start)));
		}
		else if (end === undefined && isString(start)) {
			_.set(this, {
				start: enforcePoint(start.slice(2, start.indexOf(']')), new Point(), true),
				end: enforcePoint(start.slice(start.indexOf(']') + 3, -2), new Point(), true)
			});
		}
		else if (end === undefined && isArray(start) && !Point.isValid(start)) {
			_.set(this, {
				start: enforcePoint(start[0], new Point(), true),
				end: enforcePoint(start[1], new Point(), true)
			});
		}
		else {
			_.set(this, {
				start: enforcePoint(start, new Point(), true),
				end: enforcePoint(end, new Point(), true)
			});
		}
	}

	/**
	 * Determine if a value is a Vector or can be coerced into a vector
	 *
	 * @memberOf Vector
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		return value instanceof Vector ||
			isString(value) && Point.isValid(value.slice(2, value.indexOf(']'))) && Point.isValid(value.slice(value.indexOf(']') + 3, -2)) ||
			isArray(value) && value.length === 2 && Point.isValid(value[0]) && Point.isValid(value[1]);
	}

	/**
	 * Determine if another vector is the same as this one
	 *
	 * @memberOf Vector
	 * @instance
	 *
	 * @arg {Vector} vector2
	 *
	 * @returns {Boolean}
	 */
	isSame(vector2) {
		return vector2 instanceof Vector &&
			_(vector2).start.isSame(_(this).start) &&
			_(vector2).end.isSame(_(this).end);
	}

	/**
	 * Switch the start and end points
	 *
	 * @memberOf Vector
	 * @instance
	 */
	invert() {
		[_(this).start, _(this).end] = [_(this).end, _(this).start];
		_(this).angle = null;
		_(this).offset = null;

		return this;
	}

	/**
	 * Get a string representation of the value of the vector
	 *
	 * @memberOf Vector
	 * @instance
	 */
	toString() {
		return '[[' + _(this).start.toString() + '],[' + _(this).end.toString() + ']]';
	}

	/**
	 * Returns an array with the values of the start and end points
	 *
	 * @memberOf Vector
	 * @instance
	 */
	valueOf() {
		return [_(this).start.valueOf(), _(this).end.valueOf()];
	}
}

Object.assign(Vector.prototype, {
	/**
	 * The start point
	 *
	 * @method
	 * @memberOf Vector
	 * @instance
	 * @chainable
	 *
	 * @arg {Point} [point]
	 *
	 * @returns {Point}
	 */
	start: methodPoint({
		set(start) {
			_(this).start = start;
			_(this).angle = null;
			_(this).length = null;
			_(this).offset = null;
		},
		get() {
			return _(this).start;
		}
	}),
	/**
	 * The end point
	 *
	 * @method
	 * @memberOf Vector
	 * @instance
	 * @chainable
	 *
	 * @arg {Point} [point]
	 *
	 * @returns {Point}
	 */
	end: methodPoint({
		set(end) {
			_(this).end = end;
			_(this).angle = null;
			_(this).length = null;
			_(this).offset = null;
		},
		get() {
			return _(this).end;
		}
	}),
	/**
	 * The length (magnitude) of the vector. Resets the end point.
	 *
	 * @method
	 * @memberOf Vector
	 * @instance
	 * @chainable
	 *
	 * @arg {Number} [length]
	 *
	 * @returns {Number}
	 */
	length: methodNumber({
		set(length) {
			_(this).end = _(this).start.pointAtDistance(this.angle(), _(this).length = length);
			_(this).offset = null;
		},
		get() {
			return _(this).length || (_(this).length = _(this).end.subtract(_(this).start).distance());
		}
	}),
	/**
	 * The angle from the start point to the end point. Resets the end point
	 *
	 * @method
	 * @memberOf Vector
	 * @instance
	 * @chainable
	 *
	 * @arg {Number} [angle]
	 *
	 * @returns {Number}
	 */
	angle: methodNumber({
		enforce(newValue, oldValue) {
			return Point.normalizeAngle(enforceNumber(newValue, oldValue));
		},
		set(angle) {
			_(this).end = _(this).start.pointAtDistance(_(this).angle = angle, this.length());
			_(this).offset = null;
		},
		get() {
			return _(this).angle || (_(this).angle = _(this).end.subtract(_(this).start).angle());
		}
	}),
	/**
	 * The x and y difference represented as a point
	 *
	 * @method
	 * @memberOf Vector
	 * @instance
	 * @chainable
	 *
	 * @arg {Point} [point]
	 *
	 * @returns {Point}
	 */
	offset: methodPoint({
		set(offset) {
			Object.assign(_(this), {
				offset,
				end: _(this).start.add(offset),
				angle: null,
				length: null
			});
		},
		get() {
			return _(this).offset || (_(this).offset = _(this).end.subtract(_(this).start));
		}
	})
});
