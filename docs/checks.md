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


<br><a name="is"></a>

### is : <code>object</code>
> Utility functions for checking if something is a particular data type. Includes all the checks from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer), along with:
> 
> ``` javascript
> import { is } from 'type-enforcer-math';
> 
> // Or import individual functions
> import { isBoolean, isString } from 'type-enforcer-math';
> ```


* [is](#is) : <code>object</code>
    * [.point(value, [coerce])](#is.point) ⇒ <code>Boolean</code>
    * [.vector(value, [coerce])](#is.vector) ⇒ <code>Boolean</code>


<br><a name="is.point"></a>

#### is.point(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [Point](docs/Point.md)

**Alias:** `isPoint`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Point |

**Example**  
``` javascript
import { isPoint } from 'type-enforcer-math';

isPoint(new Point());
// => true

isPoint('1,2');
// => false

isPoint('1,2', true);
// => true
```

<br><a name="is.vector"></a>

#### is.vector(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [Vector](docs/Vector.md)

**Alias:** `isVector`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Vector |

**Example**  
``` javascript
import { isVector } from 'type-enforcer-math';

isVector(new Vector());
// => true

isVector('[[1,2],[3,4]]');
// => false

isVector('[[1,2],[3,4]]', true);
// => true
```

[npm]: https://img.shields.io/npm/v/type-enforcer-math.svg
[npm-url]: https://npmjs.com/package/type-enforcer-math
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-math/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-math?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer-math.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer-math
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-math
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-math
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-math.svg
[license-url]: https://npmjs.com/package/type-enforcer-math/LICENSE.md
