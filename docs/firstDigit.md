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


<br><a name="firstDigit"></a>

## firstDigit(value) ⇒ <code>number</code>
> Gets the number of the position of the first digit.

**Returns**: <code>number</code> - For numbers >= 1 (+/-) the result is identical to integerDigits. 0 and non-floats return 0. Numbers between 0 and 1 (+/-) return the position as a negative int, so 0.1 -> 0, 0.0001 -> -3, etc.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to check. |


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
