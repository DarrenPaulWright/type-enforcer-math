# Type Enforcer Math

[![Greenkeeper badge](https://badges.greenkeeper.io/DarrenPaulWright/type-enforcer-math.svg)](https://greenkeeper.io/)


> An extension of type-enforcer with Math related data types and enforcer functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]

<br><a name="Installation"></a>

## Installation
```
npm install type-enforcer-math
```
_Requires Babel 7.2+_

<br><a name="About"></a>

## About
type-enforcer-math re-exports everything from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer), along with:


<br>

## Objects

<dl>
<dt><a href="docs/is.md">is</a> : <code>object</code></dt>
<dd><p>Utility functions for checking if something is a particular data type. Includes all the checks from <a href="https://github.com/DarrenPaulWright/type-enforcer">type-enforcer</a>.</p>
</dd>
<dt><a href="docs/enforce.md">enforce</a> : <code>object</code></dt>
<dd><p>Utility functions for enforcing data types. Includes all the enforcers from <a href="https://github.com/DarrenPaulWright/type-enforcer">type-enforcer</a>.</p>
</dd>
<dt><a href="docs/method.md">method</a> : <code>object</code></dt>
<dd><p>Enforce data types and remove common boilerplate code on class methods. Includes all the methods from <a href="https://github.com/DarrenPaulWright/type-enforcer">type-enforcer</a>.</p>
</dd>
</dl>

<br>

## Classes

<dl>
<dt><a href="docs/Point.md">Point</a></dt>
<dd><p>Point model with helper methods</p>
</dd>
<dt><a href="docs/Vector.md">Vector</a></dt>
<dd><p>A Euclidean Vector model.</p>
</dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="docs/abbrNumber.md">abbrNumber(value, [settings])</a> ⇒ <code>string</code></dt>
<dd><p>Abbreviates a number in a human readable format.</p>
</dd>
<dt><a href="docs/fractionDigits.md">fractionDigits(value)</a></dt>
<dd><p>Gets the number of digits to the right of the decimal point.</p>
</dd>
<dt><a href="docs/fractionDigits.md">fractionDigits(value)</a></dt>
<dd><p>Gets the number of digits to the left of the decimal point.</p>
</dd>
<dt><a href="docs/round.md">round(value, [fractionDigits], [precision])</a></dt>
<dd><p>Rounds a number to a specified number of fraction digits and/or precision</p>
</dd>
</dl>

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
