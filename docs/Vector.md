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


<br><a name="Vector"></a>

### Vector

* [Vector](#Vector)
    * [new Vector([args])](#new_Vector_new)
    * _instance_
        * [.isSame(vector2)](#Vector+isSame) ⇒ <code>Boolean</code>
        * [.invert()](#Vector+invert)
        * [.toString()](#Vector+toString)
        * [.valueOf()](#Vector+valueOf)
        * [.start([point])](#Vector+start) ⇒ <code>Point</code>
        * [.end([point])](#Vector+end) ⇒ <code>Point</code>
        * [.length([length])](#Vector+length) ⇒ <code>Number</code>
        * [.angle([angle])](#Vector+angle) ⇒ <code>Number</code>
        * [.offset([point])](#Vector+offset) ⇒ <code>Point</code>
    * _static_
        * [.isValid(value)](#Vector.isValid) ⇒ <code>boolean</code>


<br><a name="new_Vector_new"></a>

#### new Vector([args])
> A Euclidean Vector model.
> 
> ``` javascript
> import { Vector } from 'type-enforcer-math';
> ```


| Param | Type | Description |
| --- | --- | --- |
| [args] | <code>\*</code> | Accepts: <br>- A start and end point (or values that can be coerced into points) <br>- An array of two points (or values that can be coerced into points) <br>- Another vector instance <br>- A single start point (or value that can be coerced into a point) |


<br><a name="Vector+isSame"></a>

#### vector.isSame(vector2) ⇒ <code>Boolean</code>
> Determine if another vector is the same as this one


| Param | Type |
| --- | --- |
| vector2 | [<code>Vector</code>](#Vector) | 


<br><a name="Vector+invert"></a>

#### vector.invert()
> Switch the start and end points


<br><a name="Vector+toString"></a>

#### vector.toString()
> Get a string representation of the value of the vector


<br><a name="Vector+valueOf"></a>

#### vector.valueOf()
> Returns an array with the values of the start and end points


<br><a name="Vector+start"></a>

#### vector.start([point]) ⇒ <code>Point</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> The start point


| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 


<br><a name="Vector+end"></a>

#### vector.end([point]) ⇒ <code>Point</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> The end point


| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 


<br><a name="Vector+length"></a>

#### vector.length([length]) ⇒ <code>Number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> The length (magnitude) of the vector. Resets the end point.


| Param | Type |
| --- | --- |
| [length] | <code>Number</code> | 


<br><a name="Vector+angle"></a>

#### vector.angle([angle]) ⇒ <code>Number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> The angle from the start point to the end point. Resets the end point


| Param | Type |
| --- | --- |
| [angle] | <code>Number</code> | 


<br><a name="Vector+offset"></a>

#### vector.offset([point]) ⇒ <code>Point</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> The x and y difference represented as a point


| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 


<br><a name="Vector.isValid"></a>

#### Vector.isValid(value) ⇒ <code>boolean</code>
> Determine if a value is a Vector or can be coerced into a vector


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


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
