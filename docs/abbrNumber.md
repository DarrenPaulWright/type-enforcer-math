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


<br><a name="abbrNumber"></a>

## abbrNumber(value, [settings]) ⇒ <code>string</code>
> Abbreviates a number in a human readable format.

**See**: https://en.wikipedia.org/wiki/Metric_prefix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Number</code> |  |  |
| [settings] | <code>Object</code> |  |  |
| [settings.precision] | <code>Number</code> | <code>2</code> | passed to round() |
| [settings.prefix] | <code>Object</code> |  | An object of unit name prefixes to use when shortening numbers. {'-8': 'y', '-7': 'z', ... '-1': 'm', '0': '', '1': 'k', ... '7': 'Z', '8': 'Y'}. The default prefixes are single character symbols like 'k' and 'μ' while full prefix names are provided via the separately exported "metricPrefixNames" |
| [settings.suffix] | <code>String</code> | <code>&#x27;&#x27;</code> | Appended after the prefix |


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
