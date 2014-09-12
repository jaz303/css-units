var UNITS = {

    //
    // convertible

    'in'    : 0,
    'cm'    : 1,
    'pc'    : 2,
    'mm'    : 3,
    'pt'    : 4,
    'px'    : 5,
    'deg'   : 6,
    'rad'   : 7,
    's'     : 8,
    'ms'    : 9,

    //
    // non-convertible

    '%'     : true,
    'em'    : true,
    'ex'    : true

};

var _ = null;

// from libsass
var CONVERSION = [
    /*            in         cm         pc         mm         pt         px         deg          rad            s           ms      */
    /* in */    [ 1,         2.54,      6,         25.4,      72,        96,        _,           _,             _,          _       ],
    /* cm */    [ 1.0/2.54,  1,         6.0/2.54,  10,        72.0/2.54, 96.0/2.54, _,           _,             _,          _       ],
    /* pc */    [ 1.0/6.0,   2.54/6.0,  1,         25.4/6.0,  72.0/6.0,  96.0/6.0,  _,           _,             _,          _       ],
    /* mm */    [ 1.0/25.4,  1.0/10.0,  6.0/25.4,  1,         72.0/25.4, 96.0/25.4, _,           _,             _,          _       ],
    /* pt */    [ 1.0/72.0,  2.54/72.0, 6.0/72.0,  25.4/72.0, 1,         96.0/72.0, _,           _,             _,          _       ],
    /* px */    [ 1.0/96.0,  2.54/96.0, 6.0/96.0,  25.4/96.0, 72.0/96.0, 1,         _,           _,             _,          _       ],
    /* deg */   [ _,         _,         _,         _,         _,         _,         1,           Math.PI/180,   _,          _       ],
    /* rad */   [ _,         _,         _,         _,         _,         _,         180/Math.PI, 1,             _,          _       ],
    /* s */     [ _,         _,         _,         _,         _,         _,         _,           _,             1,          1000    ],
    /* ms */    [ _,         _,         _,         _,         _,         _,         _,           _,             0.001,      1       ]
];

function convert(value, from, to) {
    
    var ixf = UNITS[from], ixt = UNITS[to];

    if (typeof ixf !== 'number') throw new Error("invalid unit: " + from);
    if (typeof ixf !== 'number') throw new Error("invalid unit: " + to);

    var factor = CONVERSION[ixf][ixt];
    if (factor !== null) {
        return value * factor;
    }

    throw new Error("no conversion exists between: " + from + ", " + to);

}

function Value(value, unit) {
    
    if (!(unit in UNITS)) {
        throw new Error("invalid units: " + unit);
    }

    this.value = value;
    this.unit = unit;

}

Value.prototype.toString = function() {
    return this.value + this.unit;
}

Value.prototype.convertTo = function(toUnit) {
    return convert(this.value, this.unit, toUnit);
}

exports = module.exports = function(value, unit) {
    return new Value(value, unit);
}

exports.Value = Value;
exports.convert = convert;
