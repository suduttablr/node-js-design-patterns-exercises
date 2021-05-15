const ColorConsole = require('./ColorConsole');

class RedConsole extends ColorConsole{
    constructor() {
        super('Red');
    }
}

module.exports = RedConsole;