
declare type PointObject = { x: number, y: number };

export type PointArray = [number, number];

export type CoercibleToPoint = string |
    number |
    PointArray |
    PointObject |
    Point |
    {
        x: string;
        y: string;
    } |
    [string, string];


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
    /**
     * Determine if something is a valid point.
     *
     * @memberOf Point
     *
     * @param {unknown} value - The value to check.
     *
     * @returns {boolean}
     */
    static isValid(value: unknown): boolean;
    /**
     * Returns the same angle between 0 and 2 * PI.
     *
     * @memberOf Point
     *
     * @param {number} angle - The angle to normalize.
     *
     * @returns {number} - The normalized angle.
     */
    static normalizeAngle(angle: number): number;
    constructor(...args: Parameters<Point['set']>);
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
    set(x?: CoercibleToPoint, y?: number): this;
    x: number;
    y: number;
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
    toString(suffix?: string): string;
    /**
     * Get the value of the point as an array.
     *
     * @memberOf Point
     * @instance
     *
     * @returns {Array}
     */
    valueOf(): PointArray;
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
    isSame(point2: CoercibleToPoint): boolean;
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
    add(point: Point | PointObject): Point;
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
    subtract(point: Point | PointObject): Point;
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
    multiply(point: Point | PointObject): Point;
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
    round(): Point;
    round(fractionDigits: number): Point;
    round(fractionDigits: number, precision: number): Point;
    round(fractionDigits: null, precision: number): Point;
    /**
     * Finds the distance from point to origin (0, 0). Always returns a positive number or 0.
     *
     * @memberOf Point
     * @instance
     *
     * @returns {number}
     */
    distance(): number;
    /**
     * Finds the angle to this point from origin.
     *
     * @memberOf Point
     * @instance
     *
     * @returns {number}
     */
    angle(): number;
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
    pointAtDistance(angle: number, distance: number): Point;
    /**
     * Get a clone of this point.
     *
     * @memberOf Point
     * @instance
     *
     * @returns {Point}
     */
    clone(): Point;
}
