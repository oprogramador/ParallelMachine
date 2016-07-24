'use strict';

const expect = require('chai').expect;

var SuperObject = require('../../Machine/SuperObject.js');
var MethodInstance = require('../../Machine/MethodInstance.js');
var Dog = require('../../examples/Dog.js');

describe('MethodInstance', () => {
    it('calls the method', () => {
        var dog = new SuperObject(Dog);
        var instance = new MethodInstance(dog.getMethod('IMover', 'go'));
        instance.addParameter('this', dog);
        instance.addParameter('distance', 0);
        expect(instance.isCalled()).to['true'];
    });
});