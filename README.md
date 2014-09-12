# css-units

Value-type representation of common CSS units plus a conversion function.

## Installation

### npm

Get it:

```shell
npm install css-units
```

Require it:

```javascript
var unit = require('css-units');
```

## API

#### `var v = unit(value, unit)`
#### `var v = new unit.Value(value, unit)`

Create a new object with the given numeric `value` and string `unit` (one of `in`, `cm`, `pc`, `mm`, `pt`, `px`, `deg`, `rad`, `s`, `ms`, `%`, `em` or `ex`).

#### `v.value`

#### `v.unit`

#### `value.toString()`

Returns a CSS-compatible string representation of the value.

#### `value.convertTo(otherUnit)`

Convert `value` to `otherUnit`. Returns a new instance of `unit.Value` on success, throws an error when no conversion is possible.

#### `unit.convert(value, fromUnit, toUnit)`

Convert the number `value` from `fromUnit` to `toUnit`. Returns a number on success, throws an error when no conversion is possible.

#### `unit.convertValue(toUnit, value)`

Converts `Value` instance `value` to `toUnit`, returning a new instance on success or throwing an error when no conversion is possible. Note the reversed argument order; this is to promote use of partial-application in FP applications.

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.