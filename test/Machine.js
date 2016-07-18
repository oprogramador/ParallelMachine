'use strict';

const expect = require('chai').expect;

var Machine = require('../src/Machine.js');
var Dog = require('../examples/Dog.js');
var IEater = require('../examples/IEater.js');
var IMover = require('../examples/IMover.js');

describe('Machine', () => {
    describe('create', () => {
        it('creates an object', () => {
            var dog = Machine.create(Dog);
            expect(typeof dog).to.equal('object');
        });

        it('obtains proper interfaces', () => {
            var dog = Machine.create(Dog);
            expect(dog.getInterface('IEater')).to.equal(IEater);
            expect(dog.getInterface('IMover')).to.equal(IMover);
        });

        it('obtains proper methods', () => {
            var dog = Machine.create(Dog);
            expect(typeof dog.methods.IMover.go).to.equal('function');
            expect(typeof dog.methods.IEater.eat).to.equal('function');
            expect(typeof dog.methods.IEater.drink).to.equal('function');
        });
    });
});