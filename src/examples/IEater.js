'use strict';

var IEater = {
    eat: {
        input: {
            'this': {
                type: 'this'
            },
            amountToEat: {
                type: Number
            }
        },
        output: {
            'this': {
                type: 'this'
            },
            success: {
                type: Boolean
            }
        }
    },
    drink: {
        input: {
            'this': {
                type: 'this'
            },
            amountToDrink: {
                type: Number
            }
        },
        output: {
            'this': {
                type: 'this'
            },
            success: {
                type: Boolean
            }
        }
    }
}

module.exports = IEater;