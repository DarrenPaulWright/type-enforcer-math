import enforceVector from '../enforcer/enforceVector.js';
import Vector from '../Vector.js';
import methodPoint from './methodPoint.js';

/**
 * Builds a chainable method for getting/setting a [Vector](docs/Vector.md)
 *
 * @function method.vector
 * @extends method.any
 * @alias methodVector
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {*} [options.init=Vector]
 * @param {Function} [options.enforce=enforce.vector]
 * @param {Function} [options.compare=Vector.isSame]
 * @param {boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: new Vector(),
	enforce(newValue, oldValue, options) {
		return enforceVector(newValue, oldValue, options.coerce);
	}
});
