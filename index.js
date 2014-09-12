var UNITS = {
    'in'    : 0,
    'cm'    : 1,
    'pc'    : 2,
    'mm'    : 3,
    'pt'    : 4,
    'px'    : 5,
    'deg'   : 6,
    'rad'   : 7
};

// from libsass
var CONVERSION = [
    /*            in         cm         pc         mm         pt         px         deg          rad        */
    /* in */    [ 1,         2.54,      6,         25.4,      72,        96,        null,        null        ],
    /* cm */    [ 1.0/2.54,  1,         6.0/2.54,  10,        72.0/2.54, 96.0/2.54, null,        null        ],
    /* pc */    [ 1.0/6.0,   2.54/6.0,  1,         25.4/6.0,  72.0/6.0,  96.0/6.0,  null,        null        ],
    /* mm */    [ 1.0/25.4,  1.0/10.0,  6.0/25.4,  1,         72.0/25.4, 96.0/25.4, null,        null        ],
    /* pt */    [ 1.0/72.0,  2.54/72.0, 6.0/72.0,  25.4/72.0, 1,         96.0/72.0, null,        null        ],
    /* px */    [ 1.0/96.0,  2.54/96.0, 6.0/96.0,  25.4/96.0, 72.0/96.0, 1,         null,        null        ],
    /* deg */   [ null,      null,      null,      null,      null,      null,      1,           Math.PI/180 ],
    /* rad */   [ null,      null,      null,      null,      null,      null,      180/Math.PI, 1           ],
];

function convert(value, from, to) {
    
    var ixf = UNITS[from], ixt = UNITS[to];

    if (ixf === void 0) throw new Error("invalid unit: " + from);
    if (ixt === void 0) throw new Error("invalid unit: " + to);

    var factor = CONVERSION[ixf][ixt];
    if (factor !== null) {
        return value * factor;
    }

    throw new Error("no conversion exists between: " + from + ", " + to);

}

function Value(value, unit) {
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
