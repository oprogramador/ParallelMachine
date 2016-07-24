'use strict';

const expect = require('chai').expect;

var SuperObject = require('../../Machine/SuperObject.js');
var Dog = require('../../examples/Dog.js');
var IEater = require('../../examples/IEater.js');
var IMover = require('../../examples/IMover.js');

describe('SuperObject', () => {
    it('obtains proper interfaces', () => {
        var dog = new SuperObject(Dog);
        expect(dog.getInterface('IEater')).to.equal(IEater);
        expect(dog.getInterface('IMover')).to.equal(IMover);
    });

    it('obtains procedures', () => {
        var dog = new SuperObject(Dog);
        expect(typeof dog.getMethod('IMover', 'go').getProcedure()).to.equal('function');
        expect(typeof dog.getMethod('IEater', 'eat').getProcedure()).to.equal('function');
        expect(typeof dog.getMethod('IEater', 'drink').getProcedure()).to.equal('function');
    });

    it('obtains right methods signatures', () => {
        var dog = new SuperObject(Dog);
        expect(JSON.stringify(dog.getMethod('IMover', 'go').getSignature())).
        to.equal('{"input":{"this":{"type":"this"},"distance":{}},"output":{"this":{"type":"this"},"success":{}}}');
        expect(JSON.stringify(dog.getMethod('IEater', 'eat').getSignature())).
        to.equal('{"input":{"this":{"type":"this"},"amountToEat":{}},"output":{"this":{"type":"this"},"success":{}}}');
        expect(JSON.stringify(dog.getMethod('IEater', 'drink').getSignature())).
        to.equal('{"input":{"this":{"type":"this"},"amountToDrink":{}},"output":{"this":{"type":"this"},"success":{}}}');
    });
});