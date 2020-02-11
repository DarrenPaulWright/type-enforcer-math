import { enforceNumber, isArray, isFloat, isString } from 'type-enforcer';
import round from './utility/round.js';

const SEPARATOR = ',';
const TWO_PI = 2 * Math.PI;
const validify = (x, y) => isFloat(x, true) && isFloat(y, true);

/**
 * @class Point
 * @classdesc Point model with helper methods
 * @example
 * ``` javascript
 * import { Point } from 'type-enforcer-math';
 *
 * const point1 = new Point();
 * console.log(point1.toString());
 * // => '0,0'
 *
 * const point2 = new Point({x:1, y:2});
 * console.log(point2.toString());
 * // => '1,2'
 *
 * const point3 = new Point([3, 4]);
 * console.log(point3.toString());
 * // => '3,4'
 *
 * const point4 = new Point(5, 6);
 * console.log(point4.toString());
 * // => '5,6'
 * console.log(point4.x);
 * // => 5
 * console.log(point4.y);
 * // => 6
 * ```
 *
 * @arg {Number|Array|Object} [x=0]
 * @arg {Number} [y=0]
 */
export default class Point {
	constructor(x, y) {
		this.set(x, y);
	}

	/**
	 * Determine if something is a valid point
	 *
	 * @memberOf Point
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		return value instanceof Point ||
			(isString(value) &&
				value.indexOf(SEPARATOR) !== -1 &&
				validify(value.slice(value.indexOf(SEPARATOR) + 1), value.slice(0, value.indexOf(SEPARATOR)))) ||
			(isArray(value) &&
				value.length === 2 &&
				validify(value[0], value[1])) ||
			Boolean(value) && validify(value.x, value.y);
	}

	/**
	 * Returns the same angle between 0 and 2 * PI
	 *
	 * @memberOf Point
	 *
	 * @arg {Number} angle
	 *
	 * @returns {Number} - The normalized angle
	 */
	static normalizeAngle(angle) {
		return angle % TWO_PI + (angle < 0 ? TWO_PI : 0);
	}

	/**
	 * Set x and y
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {Number} x
	 * @arg {Number} y
	 *
	 * @returns {this}
	 */
	set(x, y) {
		if (y === undefined && x !== undefined) {
			if (isString(x)) {
				y = x.slice(x.indexOf(SEPARATOR) + 1);
				x = x.slice(0, x.indexOf(SEPARATOR));
			}
			else if (isArray(x)) {
				y = x[1];
				x = x[0];
			}
			else if ('x' in x) {
				y = x.y;
				x = x.x;
			}
		}

		this.x = enforceNumber(x, 0, true);
		this.y = enforceNumber(y, 0, true);

		return this;
	}

	/**
	 * Get the point as a string with an optional suffix
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {String} [suffix]
	 *
	 * @returns {String}
	 */
	toString(suffix = '') {
		return this.x + suffix + SEPARATOR + this.y + suffix;
	}

	valueOf() {
		return [this.x, this.y];
	}

	/**
	 * Determine if another point is the same as this one
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {Point} point2
	 *
	 * @returns {Boolean}
	 */
	isSame(point2) {
		return point2 instanceof Point ?
			this.x === point2.x && this.y === point2.y :
			point2 !== undefined && this.isSame(new Point(point2));
	}

	/**
	 * Adds the coordinates of another point to this one and returns a new point
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {Point} point
	 *
	 * @returns {Point}
	 */
	add(point) {
		return new Point(this.x + point.x, this.y + point.y);
	}

	/**
	 * Subtracts the coordinates of another point from this one and returns a new point
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {Point} point
	 *
	 * @returns {Point}
	 */
	subtract(point) {
		return new Point(this.x - point.x, this.y - point.y);
	}

	/**
	 * Multiplies the coordinates of another point with this one and returns a new point
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {Point} point
	 *
	 * @returns {Point}
	 */
	multiply(point) {
		return new Point(this.x * point.x, this.y * point.y);
	}

	/**
	 * Rounds the coordinates of this point and returns a new point
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {int} [fractionDigits=0] - Must be a positive integer or null
	 * @arg {int} [precision] - Significant digits
	 *
	 * @returns {Point}
	 */
	round(fractionDigits, precision) {
		return new Point(round(this.x, fractionDigits, precision), round(this.y, fractionDigits, precision));
	}

	/**
	 * Finds the distance from point to origin
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {Number}
	 */
	distance() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	/**
	 * Finds the angle to this point from origin
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {Boolean}
	 */
	angle() {
		return Point.normalizeAngle(Math.atan2(this.y, this.x));
	}

	/**
	 * Returns a new point at a specific angle and distance from this point
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @arg {Number} angle
	 * @arg {Number} distance
	 *
	 * @returns {Boolean}
	 */
	pointAtDistance(angle, distance) {
		return new Point(
			this.x + Math.cos(angle) * distance,
			this.y + Math.sin(angle) * distance
		);
	}

	/**
	 * Get a clone of this point
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {Boolean}
	 */
	clone() {
		return new Point(this.x, this.y);
	}
}
