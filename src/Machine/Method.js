'use strict';

var privateProperties = new WeakMap();
module.exports = class {
    constructor(signature, procedure) {
        var that = {};
        privateProperties.set(this, that);
        that.signature = signature;
        that.procedure = procedure;
    }

    getSignature() {
        var that = privateProperties.get(this);
        return that.signature;
    }

    getProcedure() {
        var that = privateProperties.get(this);
        return that.procedure;
    }
}