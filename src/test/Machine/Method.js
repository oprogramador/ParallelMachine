'use strict';

const expect = require('chai').expect;

var Method = require('../../Machine/Method.js');

describe('Method', () => {
    it('saves the values', () => {
        var signature = {
            input: {
                'this': {
                    type: 'this'
                },
                amount: {
                    type: Number
                }
            },
            output: {
                success: {
                    type: Boolean
                }
            }
        };
        var procedure = function() {};
        var method = new Method(signature, procedure);
        expect(method.getSignature()).to.equals(signature);
        expect(method.getProcedure()).to.equals(procedure);
    });
});