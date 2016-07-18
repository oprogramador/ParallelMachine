'use strict';

var IEater = {
    eat: {
        input: {
            'this': {
                type: IEater
            },
            amount: {
                type: Number
            }
        },
        output: {
            'this': {
                type: IEater
            },
            success: {
                type: Boolean
            }
        }
    },
    drink: {
        input: {
            'this': {
                type: IEater
            },
            amount: {
                type: Number
            }
        },
        output: {
            'this': {
                type: IEater
            },
            success: {
                type: Boolean
            }
        }
    }
}

module.exports = IEater;