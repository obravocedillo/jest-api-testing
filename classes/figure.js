class Figure{
    constructor(name = 'Square', length = 0, width = 0){
        this.length = length;
        this.name = name;
        this.width = width;
    }

    getArea(){
        return this.length * this.width;
    }
}

module.exports = Figure;