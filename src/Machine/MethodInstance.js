'use strict';

var Output = require('./Output.js');

var privateProperties = new WeakMap();
module.exports = class {
    constructor(method) {
        var that = {};
        privateProperties.set(this, that);
        that.method = method;
        that.inputParameters = {};
        that.passedParametersNr = 0;
        that.allParametersNr = Object.keys(method.getSignature().input).length;
        that.output = new Output();
        that.isCalled = false;
    }

    addParameter(name, value) {
        var that = privateProperties.get(this);
        that.passedParametersNr++;
        that.inputParameters[name] = value;
        if (that.passedParametersNr >= that.allParametersNr) {
            that.method.getProcedure()(that.inputParameters, that.output);
            that.isCalled = true;
        }
    }

    isCalled() {
        var that = privateProperties.get(this);
        return that.isCalled;
    }
}