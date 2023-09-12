# Type Enforcer Math

> An extension of type-enforcer with Math related data types and enforcer functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="method"></a>

## method : <code>object</code>
> Enforce data types and remove common boilerplate code on class methods. Includes all the methods from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer).

**Example**  
``` javascript
import { method } from 'type-enforcer-math';

// Or import individual functions
import { methodBoolean, methodString } from 'type-enforcer-math';

// Use it as a prototype:
const Thing = function() {};

Thing.prototype.myMethod = method.string([options]);


// or in a class:
class Thing() {}

Thing.prototype.myMethod = method.string([options]);


// or as a non-prototype method:
const Thing = function() {
    this.myMethod = method.string([options]);
};
```

* [method](#method) : <code>object</code>
    * [.point([options])](#method.point) ⇒ <code>function</code>
    * [.vector([options])](#method.vector) ⇒ <code>function</code>


<br><a name="method.point"></a>

### method.point([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [Point](docs/Point.md)

**Alias:** `methodPoint`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.init] | <code>unknown</code> | <code>Point</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.point</code> |  |
| [options.compare] | <code>function</code> | <code>Point.isSame</code> |  |
| [options.coerce] | <code>boolean</code> | <code>true</code> | If false then don't coerce the value |


<br><a name="method.vector"></a>

### method.vector([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [Vector](docs/Vector.md)

**Alias:** `methodVector`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.init] | <code>unknown</code> | <code>Vector</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.vector</code> |  |
| [options.compare] | <code>function</code> | <code>Vector.isSame</code> |  |
| [options.coerce] | <code>boolean</code> | <code>true</code> | If false then don't coerce the value |


[npm]: https://img.shields.io/npm/v/type-enforcer-math.svg
[npm-url]: https://npmjs.com/package/type-enforcer-math
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-math/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-math?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/type-enforcer-math.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/type-enforcer-math
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-math
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-math
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-math.svg
[license-url]: https://npmjs.com/package/type-enforcer-math/LICENSE.md
