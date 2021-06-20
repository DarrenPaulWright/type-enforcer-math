/* eslint-disable import/export */
/**
 * @name Installation
 * @private
 * @summary
 *
 * _Requires Babel 7.2+_
 */

/**
 * @name About
 * @private
 * @summary
 * type-enforcer-math re-exports everything from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer), along with:
 */
export * from 'type-enforcer';

export { default as is } from './src/checks/is.js';
export { default as isPoint } from './src/checks/isPoint.js';
export { default as isVector } from './src/checks/isVector.js';

export { default as enforce } from './src/enforcer/enforce.js';
export { default as enforcePoint } from './src/enforcer/enforcePoint.js';
export { default as enforceVector } from './src/enforcer/enforceVector.js';

export { default as method } from './src/methods/method.js';
export { default as methodPoint } from './src/methods/methodPoint.js';
export { default as methodVector } from './src/methods/methodVector.js';

export { default as Point } from './src/Point.js';
export { default as Vector } from './src/Vector.js';

export { default as firstDigit } from './src/utility/firstDigit.js';
export { default as fractionDigits } from './src/utility/fractionDigits.js';
export { default as integerDigits } from './src/utility/integerDigits.js';
export { default as pow10 } from './src/utility/pow10.js';
export { default as round } from './src/utility/round.js';
export {
	default as abbrNumber, metricPrefixNames
} from './src/utility/abbrNumber.js';
