import { Point } from "./Point";
export class Line {
	pointOne: Point;
	pointTwo: Point;
	points: Array<Point>;

	constructor(p1: Point, p2: Point, withDiagonals: boolean = true) {
		this.pointOne = p1;
		this.pointTwo = p2;
		this.points = this.buildLine(p1, p2, withDiagonals);
	}

	buildLine(p1: Point, p2: Point, withDiagonals: boolean = true): Array<Point> {
		let points: Array<Point> = [];

		if (this.isVertical(p1, p2)) {
			points = this.buildVerticalLine(p1, p2);
		}
		if (this.isHorizontal(p1, p2)) {
			points = this.buildHorizontalLine(p1, p2);
		}

		if (this.isDiagonal(p1, p2) && withDiagonals) {
			points = this.buildDiagonalLine(p1, p2);
		}

		return points;
	}

	buildDiagonalLine(p1: Point, p2: Point): Array<Point> {
		const points: Array<Point> = [];

		// 6,4 / 2,0
		if (p1.coordX < p2.coordX) {
			if (p1.coordY < p2.coordY) {
				// Case 1,1 3,3
				let x = p1.coordX;
				let y = p1.coordY;
				for (let index = p1.coordX; index <= p2.coordX; index++) {
					points.push(new Point(x, y));
					y++;
					x++;
				}
			} else {
				// Case 1,3  3,1
				let x = p1.coordX;
				let y = p1.coordY;
				for (let index = p1.coordX; index <= p2.coordX; index++) {
					points.push(new Point(x, y));
					y--;
					x++;
				}
			}
		} else {
			if (p1.coordY < p2.coordY) {
				// Case 3,1  1,3
				let x = p1.coordX;
				let y = p1.coordY;
				for (let index = p1.coordY; index <= p2.coordY; index++) {
					points.push(new Point(x, y));
					y++;
					x--;
				}
			} else {
				//  Case 3,3  1,1
				let x = p1.coordX;
				let y = p1.coordY;
				for (let index = p2.coordY; index <= p1.coordY; index++) {
					points.push(new Point(x, y));
					y--;
					x--;
				}
			}
		}
		return points;
	}

	buildVerticalLine(p1: Point, p2: Point): Array<Point> {
		const points: Array<Point> = [];
		const lowerY = this.getLowestYCoord(p1, p2);
		const higherY = this.getHighestYCoord(p1, p2);
		for (let index = lowerY; index <= higherY; index++) {
			points.push(new Point(p1.coordX, index));
		}
		return points;
	}

	buildHorizontalLine(p1: Point, p2: Point): Array<Point> {
		const points: Array<Point> = [];
		const lowerX = this.getLowestXCoord(p1, p2);
		const higherX = this.getHighestXCoord(p1, p2);
		for (let index = lowerX; index <= higherX; index++) {
			points.push(new Point(index, p1.coordY));
		}
		return points;
	}

	isHorizontal(p1: Point, p2: Point): boolean {
		return p1.coordY === p2.coordY;
	}

	isVertical(p1: Point, p2: Point): boolean {
		return p1.coordX === p2.coordX;
	}

	isDiagonal(p1: Point, p2: Point): boolean {
		return Math.abs(p1.coordX - p2.coordX) === Math.abs(p1.coordY - p2.coordY);
	}

	getHighestXCoord(p1: Point, p2: Point): number {
		return p1.coordX > p2.coordX ? p1.coordX : p2.coordX;
	}

	getLowestXCoord(p1: Point, p2: Point): number {
		return p1.coordX < p2.coordX ? p1.coordX : p2.coordX;
	}

	getHighestYCoord(p1: Point, p2: Point): number {
		return p1.coordY > p2.coordY ? p1.coordY : p2.coordY;
	}

	getLowestYCoord(p1: Point, p2: Point): number {
		return p1.coordY < p2.coordY ? p1.coordY : p2.coordY;
	}
}
