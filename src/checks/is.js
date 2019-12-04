import { is } from 'type-enforcer';
import isPoint from './isPoint';
import isVector from './isVector';

/**
 * Utility functions for checking if something is a particular data type. Includes all the checks from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer), along with:
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
