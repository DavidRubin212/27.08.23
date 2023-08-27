var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(hight, width) {
        this.hight = hight;
        this.width = width;
    }
    Rectangle.prototype.callArea = function () {
        return this.hight * this.width;
    };
    return Rectangle;
}());
var Rectangle1 = new Rectangle(10, 12);
console.log(Rectangle1.callArea());
var Squre = /** @class */ (function (_super) {
    __extends(Squre, _super);
    function Squre(hight) {
        return _super.call(this, hight, hight) || this;
    }
    Squre.prototype.SqArea = function () {
        return this.hight * this.hight;
    };
    return Squre;
}(Rectangle));
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log('drawing a shape');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        console.log('drawing a circle');
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.draw = function () {
        console.log('drawing a triangle');
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        console.log('drawing a square');
    };
    return Square;
}(Shape));
function renderShapes(shapes) {
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        shape.draw();
    }
}
// Creating instances of shape classes
var circle = new Circle();
var triangle = new Triangle();
var square = new Square();
// Using the renderShapes function with an array of shape instances
renderShapes([circle, triangle, square]);
var Squre1 = new Squre(10);
console.log(Squre1.SqArea());
