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


<br><a name="enforce"></a>

### enforce : <code>object</code>
> Utility functions for enforcing data types. Includes all the enforcers from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer), along with:
> 
> ``` javascript
> import { enforce } from 'type-enforcer-math';
> 
> // Or import individual functions
> import { enforceBoolean, enforceString } from 'type-enforcer-math';
> ```


* [enforce](#enforce) : <code>object</code>
    * [.point(value, alt, [coerce])](#enforce.point) ⇒ <code>Point</code>
    * [.vector(value, alt, [coerce])](#enforce.vector) ⇒ <code>Vector</code>


<br><a name="enforce.point"></a>

#### enforce.point(value, alt, [coerce]) ⇒ <code>Point</code>
> Enforce that a value is a [Point](docs/Point.md). Uses [isPoint](docs/checks.md#isPoint).

**Alias:** `enforcePoint`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Point</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer-math';

enforce.point(new Point(1, 2), new Point());
// => point 1,2

enforce.point('1,2', new Point());
// => point 0,0

enforce.point('1,2', new Point(), true);
// => point 1,2
```

<br><a name="enforce.vector"></a>

#### enforce.vector(value, alt, [coerce]) ⇒ <code>Vector</code>
> Enforce that a value is a [Vector](docs/Vector.md). Uses [isVector](docs/checks.md#isVector).

**Alias:** `enforceVector`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Vector</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer-math';

enforce.vector(new Vector('[[1,2],[3,4]]'), new Vector());
// => vector of '[[1,2],[3,4]]'

enforce.vector('[[1,2],[3,4]]', new Vector());
// => vector of '[[0,0],[0,0]]'

enforce.vector('[[1,2],[3,4]]', new Vector(), true);
// => vector of '[[1,2],[3,4]]'
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
