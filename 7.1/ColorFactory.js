const RedConsole = require('./RedConsole');
const GreenConsole = require('./GreenConsole');
const BlueConsole = require('./BlueConsole');
class ColorFactory {
    create(type) {
        switch(type) {
            case 'Red':
                return new RedConsole();
            case 'Green':
                return new GreenConsole();
            case 'Blue':
                    return new BlueConsole();
            default:
                return new Error('Color type not supported');
        }
    }
}
module.exports = new ColorFactory();