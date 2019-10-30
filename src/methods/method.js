import methodPoint from './methodPoint';
import methodVector from './methodVector';

/**
 * Enforce data types and remove common boilerplate code on class methods.
 *
 * ``` javascript
 * import { method } from 'type-enforcer-math-addon';
 *
 * // Or import individual functions
 * import { methodBoolean, methodString } from 'type-enforcer-math-addon';
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
	point: methodPoint,
	vector: methodVector
};
