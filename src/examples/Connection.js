'use strict';

var SuperObject = require('../Machine/SuperObject.js');
var Dog = require('./Dog.js');
var MethodInstance = require('../Machine/MethodInstance.js');

var dog = new SuperObject(Dog);
var go = new MethodInstance(dog.getMethod('IMover', 'go'));