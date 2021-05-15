const ColorFactory = require('./ColorFactory');

const Red = ColorFactory.create('Red');
const Green = ColorFactory.create('Green');
const Blue = ColorFactory.create('Blue');

Red.log();
Green.log();
Blue.log();