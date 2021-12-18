export class Point {
	coordX: number;
	coordY: number;

	constructor(x: number, y: number) {
		this.coordX = x;
		this.coordY = y;
	}

	equalsPoint(p: Point): boolean {
		return p.coordX === this.coordX && p.coordY === this.coordY;
	}
}
