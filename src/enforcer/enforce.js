import { enforce } from 'type-enforcer';
import enforcePoint from './enforcePoint.js';
import enforceVector from './enforceVector.js';

/**
 * Utility functions for enforcing data types. Includes all the enforcers from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-math';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer-math';
 * ```
 *
 * @namespace enforce
 */
export default {
	...enforce,
	point: enforcePoint,
	vector: enforceVector
};
