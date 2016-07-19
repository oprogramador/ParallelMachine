'use strict';

var SuperObject = require('./SuperObject.js');
var lodash = require('lodash');

module.exports = class {
    static create(template) {
        var object = new SuperObject;
        object['implements'] = template['implements'];
        object.methods = lodash.mapValues(template['methods'], (methods, interfaceName) => {
            return lodash.mapValues(methods, (method, methodName) => {
                return {
                    'function': method,
                    signature: template['implements'][interfaceName][methodName]
                };
            });
        });
        return object;
    }

    static connect(output, input) {

    }
}