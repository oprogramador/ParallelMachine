'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

var Output = require('../../Machine/Output.js');

describe('Output', () => {
    it('calls input callback', () => {
        var name = 'a';
        var value = 2;
        var addParameter = sinon.spy();
        var input = {
            addParameter: addParameter
        };
        var output = new Output();
        output.setInput(name, input);
        output.send(name, value);
        expect(addParameter.calledWith(name, value)).to['true'];
    });
});