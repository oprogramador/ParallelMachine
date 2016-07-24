'use strict';

var IMover = {
    go: {
        input: {
            'this': {
                type: 'this'
            },
            distance: {
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
};

module.exports = IMover;