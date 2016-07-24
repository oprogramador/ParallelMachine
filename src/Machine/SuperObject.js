'use strict';

var lodash = require('lodash');
var Method = require('./Method.js');

var privateProperties = new WeakMap();
module.exports = class {
    constructor(template, args) {
        var that = {};
        privateProperties.set(this, that);
        that['implements'] = template['implements'];
        that.methods = lodash.mapValues(template['methods'], (methods, interfaceName) => {
            return lodash.mapValues(methods, (method, methodName) => {
                return new Method(template['implements'][interfaceName][methodName], method);
            });
        });
        template.init.apply(this, args);
    }

    getInterface(name) {
        var that = privateProperties.get(this);
        return that['implements'][name];
    }

    getMethod(interfaceName, name) {
        var that = privateProperties.get(this);
        return that['methods'][interfaceName][name];
    }
}