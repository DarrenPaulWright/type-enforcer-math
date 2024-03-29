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
 * @param {number | Array | object} [x=0]
 * @param {number} [y=0]
 */
export default class Point {
	constructor(x, y) {
		this.set(x, y);
	}

	/**
	 * Determine if something is a valid point.
	 *
	 * @memberOf Point
	 *
	 * @param {unknown} value - The value to check.
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		return value instanceof Point ||
			(isString(value) &&
				value.includes(SEPARATOR) &&
				validify(value.slice(value.indexOf(SEPARATOR) + 1), value.slice(0, value.indexOf(SEPARATOR)))) ||
			(isArray(value) &&
				value.length === 2 &&
				validify(value[0], value[1])) ||
			(Boolean(value) && validify(value.x, value.y));
	}

	/**
	 * Returns the same angle between 0 and 2 * PI.
	 *
	 * @memberOf Point
	 *
	 * @param {number} angle - The angle to normalize.
	 *
	 * @returns {number} - The normalized angle.
	 */
	static normalizeAngle(angle) {
		return (angle % TWO_PI) + (angle < 0 ? TWO_PI : 0);
	}

	/**
	 * Set x and y.
	 *
	 * @memberOf Point
	 * @instance
	 * @chainable
	 *
	 * @param {number|string|Array|object|Point} x - The x coordinate as a number (must also provide y param), or a comma separated string as 'x,y', or an Array as [x, y], or an object as { x: 0, y: 0 }, or another valid Point.
	 * @param {number} [y] - The y coordinate as a number.
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
	 * Get the point as a string with an optional suffix.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {string} [suffix] - A suffix to append to each coordinate.
	 *
	 * @returns {string}
	 */
	toString(suffix = '') {
		return this.x + suffix + SEPARATOR + this.y + suffix;
	}

	/**
	 * Get the value of the point as an array.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {Array}
	 */
	valueOf() {
		return [this.x, this.y];
	}

	/**
	 * Determine if another point is the same as this one.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {Point} point2 - Another point.
	 *
	 * @returns {boolean}
	 */
	isSame(point2) {
		return point2 instanceof Point ?
			this.x === point2.x && this.y === point2.y :
			point2 !== undefined && this.isSame(new Point(point2));
	}

	/**
	 * Adds the coordinates of another point to this one and returns a new point.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {Point} point - Another point.
	 *
	 * @returns {Point}
	 */
	add(point) {
		return new Point(this.x + point.x, this.y + point.y);
	}

	/**
	 * Subtracts the coordinates of another point from this one and returns a new point.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {Point} point - Another point.
	 *
	 * @returns {Point}
	 */
	subtract(point) {
		return new Point(this.x - point.x, this.y - point.y);
	}

	/**
	 * Multiplies the coordinates of another point with this one and returns a new point.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {Point} point - Another point.
	 *
	 * @returns {Point}
	 */
	multiply(point) {
		return new Point(this.x * point.x, this.y * point.y);
	}

	/**
	 * Rounds the coordinates of this point and returns a new point.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {number} [fractionDigits=0] - Must be a positive integer or null.
	 * @param {number} [precision] - Significant digits.
	 *
	 * @returns {Point}
	 */
	round(fractionDigits, precision) {
		return new Point(round(this.x, fractionDigits, precision), round(this.y, fractionDigits, precision));
	}

	/**
	 * Finds the distance from point to origin (0, 0). Always returns a positive number or 0.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {number}
	 */
	distance() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	/**
	 * Finds the angle to this point from origin.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {number}
	 */
	angle() {
		return Point.normalizeAngle(Math.atan2(this.y, this.x));
	}

	/**
	 * Returns a new point at a specific angle and distance from this point.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @param {number} angle - The angle.
	 * @param {number} distance - The distance.
	 *
	 * @returns {Point}
	 */
	pointAtDistance(angle, distance) {
		return new Point(
			this.x + (Math.cos(angle) * distance),
			this.y + (Math.sin(angle) * distance)
		);
	}

	/**
	 * Get a clone of this point.
	 *
	 * @memberOf Point
	 * @instance
	 *
	 * @returns {Point}
	 */
	clone() {
		return new Point(this.x, this.y);
	}
}
