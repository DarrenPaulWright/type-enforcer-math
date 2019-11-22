import enforceVector from '../enforcer/enforceVector';
import Vector from '../Vector';
import methodPoint from './methodPoint';

/**
 * Builds a chainable method for getting/setting a [Vector](docs/Vector.md)
 *
 * @function method.vector
 * @extends method.any
 * @alias methodVector
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=Vector]
 * @arg {Function} [options.enforce=enforce.vector]
 * @arg {Function} [options.compare=Vector.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: new Vector(),
	enforce(newValue, oldValue, options) {
		return enforceVector(newValue, oldValue, options.coerce);
	}
});
