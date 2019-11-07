import { enforce } from 'type-enforcer';
import enforcePoint from './enforcePoint';
import enforceVector from './enforceVector';

/**
 * Utility functions for enforcing data types.
 *
 * ``` javascript
 * import { enforce } from 'type-enforcer-math';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer-math';
 * ```
 *
 * @typedef {object} enforce
 */
export default {
	...enforce,
	point: enforcePoint,
	vector: enforceVector
};
