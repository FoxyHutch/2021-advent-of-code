import { Point } from "./Point";
import { Line } from "./Line";
import { PointWithOverlapCount } from "./PointWithOverlapCount";

// https://math.stackexchange.com/questions/1194565/how-to-know-if-two-points-are-diagonally-aligned

export class HydrothermalVentDetection {
	DANGEROUS_VENT_COUNT = 2;
	LINE_INSTRUCTION_SEPARATOR = " -> ";
	input: Array<string>;
	lines: Array<Line>;

	constructor(data: Array<string>, withDiagonals: boolean) {
		this.input = data;
		this.lines = this.initializeLines(data, withDiagonals);
	}

	initializeLines(input: Array<string>, withDiagonals: boolean = true): Array<Line> {
		const lines = [];
		// Example: "0,9 -> 5,9"
		for (const lineInstructionString of input) {
			const twoPointsAsString = this.splitLinebuildingInstructions(lineInstructionString);
			const twoPoints = [];

			for (const pointAsString of twoPointsAsString) {
				const pointsAsArrayOfStrings = pointAsString.split(",");
				const point = new Point(
					parseInt(pointsAsArrayOfStrings[0]),
					parseInt(pointsAsArrayOfStrings[1])
				);
				twoPoints.push(point);
			}
			const line = new Line(twoPoints[0], twoPoints[1], withDiagonals);
			lines.push(line);
		}
		return lines;
	}

	splitLinebuildingInstructions(toSplit: string): Array<string> {
		return toSplit.split(this.LINE_INSTRUCTION_SEPARATOR);
	}

	determineNumberOfDangerousPoints(): number {
		const potentieallyDangerousPoints: Array<PointWithOverlapCount> = [];
		for (const line of this.lines) {
			const linePoints = line.points;
			for (const linePoint of linePoints) {
				if (potentieallyDangerousPoints.find((p) => p.equalsPoint(linePoint))) {
					potentieallyDangerousPoints.find((p) => p.equalsPoint(linePoint))!.overlapCount++;
				} else {
					const point = new PointWithOverlapCount(linePoint.coordX, linePoint.coordY);
					potentieallyDangerousPoints.push(point);
				}
			}
		}
		let overlapGreaterTwoCount = 0;
		for (const coord of potentieallyDangerousPoints) {
			if (coord.overlapCount >= 2) {
				overlapGreaterTwoCount++;
			}
		}

		return overlapGreaterTwoCount;
	}
}
