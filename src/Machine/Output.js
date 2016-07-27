'use strict';

var privateProperties = new WeakMap();
module.exports = class {
    constructor() {
        var that = {};
        privateProperties.set(this, that);
        that.inputs = {};
    }

    setInput(name, input) {
        var that = privateProperties.get(this);
        that.inputs[name] = input;
    }

    send(name, value) {
        var that = privateProperties.get(this);
        that.inputs[name].addParameter(name, value);
    }
}