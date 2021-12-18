import { Point } from "./Point";
export class PointWithOverlapCount extends Point {
	overlapCount: number = 0;

	constructor(x: number, y: number, overlap: number = 1) {
		super(x, y);
		this.overlapCount = overlap;
	}
}
