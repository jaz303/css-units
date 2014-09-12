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

#### `v.value`

#### `v.unit`

#### `value.toString()`

#### `value.convertTo(otherUnit)`

#### `unit.convert()`

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.