/**
 * @name Installation
 * @summary
 *
 * ```
 * npm install type-enforcer-ui-addon
 * ```
 * _Requires Babel 7.2+_
 */

/**
 * @name Docs
 * @summary
 * #### Extra Data Types
 * - [Point](docs/Point.md)
 * - [Vector](docs/Vector.md)
 *
 * #### Type Checks
 * - [checks](docs/checks.md)
 *
 * #### Type Enforcement
 * - [enforce](docs/enforce.md)
 *
 * #### Type Enforcing Methods
 * - [method](docs/method.md)
 */
export { default as is } from './src/checks/is';
export { default as isPoint } from './src/checks/isPoint';
export { default as isVector } from './src/checks/isVector';

export { default as enforce } from './src/enforcer/enforce';
export { default as enforcePoint } from './src/enforcer/enforcePoint';
export { default as enforceVector } from './src/enforcer/enforceVector';

export { default as method } from './src/methods/method';
export { default as methodPoint } from './src/methods/methodPoint';
export { default as methodVector } from './src/methods/methodVector';

export { default as Point } from './src/Point';
export { default as Vector } from './src/Vector';

import './src/addon';
