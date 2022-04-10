function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        get area() {
            return null;
        }
    }

    Figure.prototype.changeUnits = function(unit) {
        this.units = unit;
    }
    Figure.prototype.unitConverter = function(number) {
        if (this.units == 'm') {
            return number /= 100;
        } else if (this.units == 'mm') {
            return number *= 10;
        }
        return number;
    }
    Figure.prototype.toString = function() {
        return `Figures units: ${this.units}`;
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }
        get radius() {
            return this.unitConverter(this._radius);
        }
        get area() {
            return Math.PI * this.radius ** 2;
        }
    }

    Circle.prototype.toString = function() {
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.unitConverter(this._width);
        }

        get height() {
            return this.unitConverter(this._height);
        }

        get area() {
            return this.width * this.height;
        }
    }

    Rectangle.prototype.toString = function() {
        return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}