# Type Enforcer Math Addon

> An addon for type-enforcer with Math related data types and enforcer functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="method"></a>

### method : <code>object</code>
> Enforce data types and remove common boilerplate code on class methods.> > ``` javascript> import { method } from 'type-enforcer-math-addon';> > // Or import individual functions> import { methodBoolean, methodString } from 'type-enforcer-math-addon';> ```

**Example**  
``` javascript// Use it as a prototype:const Thing = function() {};Thing.prototype.myMethod = method.string([options]);// or in a class:class Thing() {}Thing.prototype.myMethod = method.string([options]);// or as a non-prototype method:const Thing = function() {    this.myMethod = method.string([options]);};```

* [method](#method) : <code>object</code>
    * [.point([options])](#method.point) ⇒ <code>function</code>
    * [.vector([options])](#method.vector) ⇒ <code>function</code>


<br><a name="method.point"></a>

#### method.point([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [Point](docs/Point.md)

**Alias:** `methodPoint`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>Point</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.point</code> |  |
| [options.compare] | <code>function</code> | <code>Point.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |


<br><a name="method.vector"></a>

#### method.vector([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [Vector](docs/Vector.md)

**Alias:** `methodVector`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>Vector</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.vector</code> |  |
| [options.compare] | <code>function</code> | <code>Vector.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |


[npm]: https://img.shields.io/npm/v/type-enforcer-math-addon.svg
[npm-url]: https://npmjs.com/package/type-enforcer-math-addon
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math-addon.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math-addon
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-math-addon/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-math-addon?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer-math-addon.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer-math-addon
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-math-addon
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-math-addon
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math-addon/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math-addon?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-math-addon.svg
[license-url]: https://npmjs.com/package/type-enforcer-math-addon/LICENSE.md
