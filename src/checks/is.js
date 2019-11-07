import { is } from 'type-enforcer';
import isPoint from './isPoint';
import isVector from './isVector';

/**
 * Utility functions for checking if something is a particular data type.
 *
 * ``` javascript
 * import { is } from 'type-enforcer-math';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer-math';
 * ```
 *
 * @typedef {object} is
 */
export default {
	...is,
	point: isPoint,
	vector: isVector
};
