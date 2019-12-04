import { method } from 'type-enforcer';
import methodPoint from './methodPoint';
import methodVector from './methodVector';

/**
 * Enforce data types and remove common boilerplate code on class methods. Includes all the methods from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer), along with:
 *
 * ``` javascript
 * import { method } from 'type-enforcer-math';
 *
 * // Or import individual functions
 * import { methodBoolean, methodString } from 'type-enforcer-math';
 * ```
 *
 * @example
 * ``` javascript
 * // Use it as a prototype:
 * const Thing = function() {};
 *
 * Thing.prototype.myMethod = method.string([options]);
 *
 *
 * // or in a class:
 * class Thing() {}
 *
 * Thing.prototype.myMethod = method.string([options]);
 *
 *
 * // or as a non-prototype method:
 * const Thing = function() {
 *     this.myMethod = method.string([options]);
 * };
 * ```
 *
 * @typedef {object} method
 */
export default {
	...method,
	point: methodPoint,
	vector: methodVector
};
