'use strict';

var Machine = require('../src/Machine.js');
var Dog = require('./Dog.js');

var dog = Machine.create(Dog);
Machine.connect(dog, dog.getInterface('IMover').go.input.this);
Machine.connect(1, dog.getInterface('IMover').go.input.amount);