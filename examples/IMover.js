'use strict';

var IMover = {
    go: {
        input: {
            'this': {
                type: IMover
            },
            distance: {
                type: Number
            }
        },
        output: {
            'this': {
                type: IMover
            },
            success: {
                type: Boolean
            }
        }
    }
};

module.exports = IMover;