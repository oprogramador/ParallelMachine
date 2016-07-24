'use strict';

const expect = require('chai').expect;

var ValueProvider = require('../../Machine/ValueProvider.js');

describe('ValueProvider', () => {
    it('saves the value', () => {
        var value = {
            a: 0
        };
        var provider = new ValueProvider(value);
        expect(provider.getValue()).to.equals(value);
    });
});