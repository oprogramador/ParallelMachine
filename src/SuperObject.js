'use strict';

module.exports = class {
    getInterface(name) {
        return this['implements'][name];
    }
}