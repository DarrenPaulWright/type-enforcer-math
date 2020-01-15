import { is } from 'type-enforcer';
import isPoint from './isPoint.js';
import isVector from './isVector.js';

/**
 * Utility functions for checking if something is a particular data type. Includes all the checks from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer).
 *
 * @example
 * ``` javascript
 * import { is } from 'type-enforcer-math';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer-math';
 * ```
 *
 * @namespace is
 */
export default {
	...is,
	point: isPoint,
	vector: isVector
};
