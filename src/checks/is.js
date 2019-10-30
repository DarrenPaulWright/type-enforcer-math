import isPoint from './isPoint';
import isVector from './isVector';

/**
 * Utility functions for checking if something is a particular data type.
 *
 * ``` javascript
 * import { is } from 'type-enforcer-math-addon';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer-math-addon';
 * ```
 *
 * @typedef {object} is
 */
export default {
	point: isPoint,
	vector: isVector
};
