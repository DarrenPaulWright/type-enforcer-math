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


<br><a name="Point"></a>

## Point
> Point model with helper methods


* [Point](#Point)
    * [new Point([x], [y])](#new_Point_new)
    * _instance_
        * [.set(x, [y])](#Point+set) ⇒ <code>this</code>
        * [.toString([suffix])](#Point+toString) ⇒ <code>string</code>
        * [.valueOf()](#Point+valueOf) ⇒ <code>Array</code>
        * [.isSame(point2)](#Point+isSame) ⇒ <code>boolean</code>
        * [.add(point)](#Point+add) ⇒ [<code>Point</code>](#Point)
        * [.subtract(point)](#Point+subtract) ⇒ [<code>Point</code>](#Point)
        * [.multiply(point)](#Point+multiply) ⇒ [<code>Point</code>](#Point)
        * [.round([fractionDigits], [precision])](#Point+round) ⇒ [<code>Point</code>](#Point)
        * [.distance()](#Point+distance) ⇒ <code>number</code>
        * [.angle()](#Point+angle) ⇒ <code>number</code>
        * [.pointAtDistance(angle, distance)](#Point+pointAtDistance) ⇒ [<code>Point</code>](#Point)
        * [.clone()](#Point+clone) ⇒ [<code>Point</code>](#Point)
    * _static_
        * [.isValid(value)](#Point.isValid) ⇒ <code>boolean</code>
        * [.normalizeAngle(angle)](#Point.normalizeAngle) ⇒ <code>number</code>


<br><a name="new_Point_new"></a>

### new Point([x], [y])

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>number</code>, <code>Array</code>, <code>object</code> | <code>0</code> | 
| [y] | <code>number</code> | <code>0</code> | 

**Example**  
``` javascript
import { Point } from 'type-enforcer-math';

const point1 = new Point();
console.log(point1.toString());
// => '0,0'

const point2 = new Point({x:1, y:2});
console.log(point2.toString());
// => '1,2'

const point3 = new Point([3, 4]);
console.log(point3.toString());
// => '3,4'

const point4 = new Point(5, 6);
console.log(point4.toString());
// => '5,6'
console.log(point4.x);
// => 5
console.log(point4.y);
// => 6
```

<br><a name="Point+set"></a>

### point.set(x, [y]) ⇒ <code>this</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> Set x and y.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code>, <code>string</code>, <code>Array</code>, <code>object</code>, [<code>Point</code>](#Point) | The x coordinate as a number (must also provide y param), or a comma separated string as 'x,y', or an Array as [x, y], or an object as { x: 0, y: 0 }, or another valid Point. |
| [y] | <code>number</code> | The y coordinate as a number. |


<br><a name="Point+toString"></a>

### point.toString([suffix]) ⇒ <code>string</code>
> Get the point as a string with an optional suffix.


| Param | Type | Description |
| --- | --- | --- |
| [suffix] | <code>string</code> | A suffix to append to each coordinate. |


<br><a name="Point+valueOf"></a>

### point.valueOf() ⇒ <code>Array</code>
> Get the value of the point as an array.


<br><a name="Point+isSame"></a>

### point.isSame(point2) ⇒ <code>boolean</code>
> Determine if another point is the same as this one.


| Param | Type | Description |
| --- | --- | --- |
| point2 | [<code>Point</code>](#Point) | Another point. |


<br><a name="Point+add"></a>

### point.add(point) ⇒ [<code>Point</code>](#Point)
> Adds the coordinates of another point to this one and returns a new point.


| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | Another point. |


<br><a name="Point+subtract"></a>

### point.subtract(point) ⇒ [<code>Point</code>](#Point)
> Subtracts the coordinates of another point from this one and returns a new point.


| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | Another point. |


<br><a name="Point+multiply"></a>

### point.multiply(point) ⇒ [<code>Point</code>](#Point)
> Multiplies the coordinates of another point with this one and returns a new point.


| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | Another point. |


<br><a name="Point+round"></a>

### point.round([fractionDigits], [precision]) ⇒ [<code>Point</code>](#Point)
> Rounds the coordinates of this point and returns a new point.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fractionDigits] | <code>number</code> | <code>0</code> | Must be a positive integer or null. |
| [precision] | <code>number</code> |  | Significant digits. |


<br><a name="Point+distance"></a>

### point.distance() ⇒ <code>number</code>
> Finds the distance from point to origin (0, 0). Always returns a positive number or 0.


<br><a name="Point+angle"></a>

### point.angle() ⇒ <code>number</code>
> Finds the angle to this point from origin.


<br><a name="Point+pointAtDistance"></a>

### point.pointAtDistance(angle, distance) ⇒ [<code>Point</code>](#Point)
> Returns a new point at a specific angle and distance from this point.


| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | The angle. |
| distance | <code>number</code> | The distance. |


<br><a name="Point+clone"></a>

### point.clone() ⇒ [<code>Point</code>](#Point)
> Get a clone of this point.


<br><a name="Point.isValid"></a>

### Point.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid point.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to check. |


<br><a name="Point.normalizeAngle"></a>

### Point.normalizeAngle(angle) ⇒ <code>number</code>
> Returns the same angle between 0 and 2 * PI.

**Returns**: <code>number</code> - - The normalized angle.  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | The angle to normalize. |


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
