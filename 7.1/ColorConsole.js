class ColorConsole{
    constructor(color) {
        this.color = color
    }

    log(){
        console.log(`I'm ${this.color}`)
    }
}

module.exports = ColorConsole;