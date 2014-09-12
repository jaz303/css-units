var test = require('tape');
var unit = require('..');

test("instantiation - function", function(assert) {

    var v = unit(5, 'px');

    assert.equal(v.value, 5);
    assert.equal(v.unit, 'px');
    assert.end();

});

test("instantiation - constructor", function(assert) {

    var v = new unit.Value(100, '%');

    assert.equal(v.value, 100);
    assert.equal(v.unit, '%');
    assert.end();

});

test("string representation", function(assert) {

    var v = unit(10, 'em');

    assert.equal(v.toString(), '10em');
    assert.end();

});

test("value.convertTo()", function(assert) {

    var v = unit(1, 's');

    var res = v.convertTo('ms');

    assert.equal(res.value, 1000);
    assert.equal(res.unit, 'ms');
    assert.end();

});

test("unit.convert()", function(assert) {

    var res = unit.convert('cm', 'in', 1);

    assert.equal(res, 2.54);
    assert.end();

});

test("unit.convertValue()", function(assert) {

    var res = unit.convertValue('px', unit(1, 'in'));

    assert.equal(res.value, 96);
    assert.equal(res.unit, 'px');
    assert.end();

});