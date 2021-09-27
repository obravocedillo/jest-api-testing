const Figure = require('./figure');

class Square extends Figure{
    constructor(name, length, width){
        super(name, length, width);
    }
}

module.exports = Square;