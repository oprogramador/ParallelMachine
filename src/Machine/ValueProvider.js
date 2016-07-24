'use strict';

var privateProperties = new WeakMap();
module.exports = class {
    constructor(value) {
        var that = {};
        privateProperties.set(this, that);
        that.value = value;
    }

    getValue() {
        var that = privateProperties.get(this);
        return that.value;
    }
}