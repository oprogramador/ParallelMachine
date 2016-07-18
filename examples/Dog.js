'use strict';

var IEater = require('./IEater.js');
var IMover = require('./IMover.js');

module.exports = {
    'implements': {
        IEater: IEater,
        IMover: IMover
    },
    methods: {
        IMover: {
            go: function(input, output) {
                this.went += input.distance;
                output.send('this', this);
                output.send('success', true);
            }
        },
        IEater: {
            eat: function(input, output) {
                this.eaten += input.amount;
                output.send('this', this);
                output.send('success', true);
            },
            drink: function(input, output) {
                this.drunk += input.amount;
                output.send('this', this);
                output.send('success', true);
            }
        }
    }
}