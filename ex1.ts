 

class Rectangle{
	hight: number;
	width: number;
	constructor(hight: number, width: number) {
		this.hight = hight;
		this.width = width;
	}
	callArea(): number {
		return this.hight * this.width;
	}

}

let Rectangle1 = new Rectangle(10, 12);

console.log(Rectangle1.callArea());

class Squre extends Rectangle {
	tzela: number;
	constructor(hight: number) {
		super(hight, hight);
	}
	SqArea(): number {
		return this.hight * this.hight;
	}
}

class Shape {
    draw() {
        console.log('drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('drawing a circle');
    }
}

class Triangle extends Shape {
    draw() {
        console.log('drawing a triangle');
    }
}

class Square extends Shape {
    draw() {
        console.log('drawing a square');
    }
}

function renderShapes(shapes:[]):void {
    for (const shape of shapes) {
        shape.draw();
    }
}

// Creating instances of shape classes
const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

// Using the renderShapes function with an array of shape instances
renderShapes([circle, triangle, square]);


let Squre1 = new Squre(10);



console.log(Squre1.SqArea());
