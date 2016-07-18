'use strict';

var SuperObject = require('./SuperObject.js');

module.exports = class {
    static create(template) {
        var object = new SuperObject;
        object['implements'] = template['implements'];
        object.methods = template.methods;
        return object;
    }

    static connect() {

    }
}