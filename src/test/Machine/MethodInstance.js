'use strict';

const expect = require('chai').expect;

var MethodInstance = require('../../Machine/MethodInstance.js');

describe('MethodInstance', () => {
    it('calls the method', () => {
        var method = {
            getSignature: () => {
                return {
                    input: {
                        a: {
                            type: Number
                        }
                    },
                    output: {
                        success: {
                            type: Boolean
                        }
                    }
                }
            },
            getProcedure: () => () => {}
        };
        var value = 0;
        var instance = new MethodInstance(method);
        instance.addParameter('a', value);
        expect(instance.isCalled()).to['true'];
    });
});