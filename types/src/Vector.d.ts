
export type CoercibleToVector = string |
    [CoercibleToPoint, CoercibleToPoint];

/**
 * @class Vector
 * @classdesc A Euclidean Vector model.
 * @example
 * ``` javascript
 * import { Vector } from 'type-enforcer-math';
 * ```
 *
 * @param {unknown} [args] - Accepts:
 * <br>- A start and end point (or values that can be coerced into points)
 * <br>- An array of two points (or values that can be coerced into points)
 * <br>- Another vector instance
 * <br>- A single start point (or value that can be coerced into a point)
 */
export default class Vector {
    /**
     * Determine if a value is a Vector or can be coerced into a vector.
     *
     * @memberOf Vector
     *
     * @param {unknown} value - The value to check.
     *
     * @returns {boolean}
     */
    static isValid(value: unknown): boolean;

    constructor(start: Vector);
    constructor(start: CoercibleToPoint, end: CoercibleToPoint);
    /**
     * Determine if another vector is the same as this one.
     *
     * @memberOf Vector
     * @instance
     *
     * @param {Vector} vector2 - Another vector.
     *
     * @returns {boolean}
     */
    isSame(vector2: Vector): boolean;
    /**
     * Switch the start and end points.
     *
     * @memberOf Vector
     * @instance
     * @chainable
     *
     * @returns {this}
     */
    invert(): this;
    /**
     * Get a string representation of the value of the vector.
     *
     * @memberOf Vector
     * @instance
     *
     * @returns {string}
     */
    toString(): string;
    /**
     * Returns an array with the values of the start and end points.
     *
     * @memberOf Vector
     * @instance
     *
     * @returns {Array}
     */
    valueOf(): [PointArray, PointArray];

    start(point: CoercibleToPoint, isForceSave?: boolean): this;
    start(): Point;

    end(point: CoercibleToPoint, isForceSave?: boolean): this;
    end(): Point;

    length(value: number, isForceSave?: boolean): this;
    length(): number;

    angle(value: number, isForceSave?: boolean): this;
    angle(): number;

    offset(point: CoercibleToPoint, isForceSave?: boolean): this;
    offset(): Point;
}

import Point, { CoercibleToPoint, PointArray } from './Point.js';
