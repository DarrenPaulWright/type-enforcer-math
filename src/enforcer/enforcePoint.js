import { enforceObject } from 'type-enforcer';
import isPoint from '../checks/isPoint.js';
import Point from '../Point.js';

/**
 * Enforce that a value is a [Point](docs/Point.md). Uses [isPoint](docs/checks.md#isPoint).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-math';
 *
 * enforce.point(new Point(1, 2), new Point());
 * // => point 1,2
 *
 * enforce.point('1,2', new Point());
 * // => point 0,0
 *
 * enforce.point('1,2', new Point(), true);
 * // => point 1,2
 * ```
 *
 * @function enforce.point
 * @alias enforcePoint
 *
 * @param {*} value
 * @param {Point} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Point}
 */
export default enforceObject.extend(isPoint, (value) => new Point(value));
