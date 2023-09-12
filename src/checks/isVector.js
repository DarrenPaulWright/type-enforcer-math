import Vector from '../Vector.js';
import isPoint from './isPoint.js';

/**
 * Check if a value is a [Vector](docs/Vector.md)
 *
 * @example
 * ``` javascript
 * import { isVector } from 'type-enforcer-math';
 *
 * isVector(new Vector());
 * // => true
 *
 * isVector('[[1,2],[3,4]]');
 * // => false
 *
 * isVector('[[1,2],[3,4]]', true);
 * // => true
 * ```
 *
 * @function is.vector
 * @alias isVector
 *
 * @param {unknown} value
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a Vector
 *
 * @returns {boolean}
 */
export default isPoint.extend(Vector);
