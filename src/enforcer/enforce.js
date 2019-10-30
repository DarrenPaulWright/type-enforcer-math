import enforcePoint from './enforcePoint';
import enforceVector from './enforceVector';

/**
 * Utility functions for enforcing data types.
 *
 * ``` javascript
 * import { enforce } from 'type-enforcer-math-addon';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer-math-addon';
 * ```
 *
 * @typedef {object} enforce
 */
export default {
	point: enforcePoint,
	vector: enforceVector
};
