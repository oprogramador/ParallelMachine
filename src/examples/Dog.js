'use strict';

var IEater = require('./IEater.js');
var IMover = require('./IMover.js');

module.exports = {
    'implements': {
        IEater: IEater,
        IMover: IMover
    },
    init: function() {
        this.went = 0;
        this.eaten = 0;
        this.drunk = 0;
    },
    methods: {
        IMover: {
            go: function(input, output) {
                input['this'].went += input.amount;
                output.send('this', this);
                output.send('success', true);
            }
        },
        IEater: {
            eat: function(input, output) {
                input['this'].eaten += input.amount;
                output.send('this', input['this']);
                output.send('success', true);
            },
            drink: function(input, output) {
                input['this'].drunk += input.amount;
                output.send('this', input['this']);
                output.send('success', true);
            }
        }
    }
}