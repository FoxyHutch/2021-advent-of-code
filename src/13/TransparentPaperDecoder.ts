import { AoCUtil } from "./../util/AoCUtil";
export class TransparentPaperDecoder {
	transparentPaper: Array<{ x: number; y: number }>;
	foldingInstructions: Array<{ axis: string; value: number }>;

	constructor(data: Array<string>) {
		this.transparentPaper = this.initializeTP(data);
		this.foldingInstructions = this.initializeFoldingInst(data);
	}

	decodeTP(
		tP: Array<{ x: number; y: number }>,
		fI: Array<{ axis: string; value: number }>,
		maxFoldingInst: number
	): Array<{ x: number; y: number }> {
		for (let index = 0; index < maxFoldingInst; index++) {
			const inst = fI[index];

			if (inst.axis === "y") {
				tP = this.foldHorizontalUp(tP, inst.value);
			} else {
				tP = this.foldVerticalLeft(tP, inst.value);
			}
		}

		return tP;
	}

	printTP(tP: Array<{ x: number; y: number }>) {
		let maxX = 0;
		let maxY = 0;
		tP.forEach((p) => {
			if (p.x > maxX) {
				maxX = p.x;
			}
			if (p.y > maxY) {
				maxY = p.y;
			}
		});

		const display: Array<Array<string>> = [];

		for (let indexY = 0; indexY <= maxY; indexY++) {
			display.push([]);
			for (let indexX = 0; indexX <= maxX; indexX++) {
				const searchPoint = tP.find((p) => p.x === indexX && p.y === indexY);
				if (searchPoint === undefined) {
					display[indexY].push(".");
				} else {
					display[indexY].push("#");
				}
			}
		}

		for (let indexY = 0; indexY < display.length; indexY++) {
			console.log(display[indexY].join());
		}
	}

	foldHorizontalUp(
		tP: Array<{ x: number; y: number }>,
		foldLine: number
	): Array<{ x: number; y: number }> {
		tP.forEach((point) => {
			if (point.y > foldLine) {
				const difference = Math.abs(point.y - foldLine);

				const newPoint = { x: point.x, y: foldLine - difference };

				const searchPoint = tP.find((p) => p.x === newPoint.x && p.y === newPoint.y);

				if (searchPoint === undefined) {
					tP.push(newPoint);
				}
			}
		});

		return Array.from(tP.filter((p) => p.y <= foldLine));
	}

	foldVerticalLeft(
		tP: { x: number; y: number }[],
		foldLine: number
	): Array<{ x: number; y: number }> {
		for (const point of tP) {
			if (point.x > foldLine) {
				const difference = Math.abs(point.x - foldLine);

				const newPoint = { x: foldLine - difference, y: point.y };
				const searchPoint = tP.find((p) => p.x === newPoint.x && p.y === newPoint.y);
				if (searchPoint === undefined) {
					tP.push(newPoint);
				}
			}
		}

		return Array.from(tP.filter((p) => p.x <= foldLine));
	}

	initializeTP(data: string[]): Array<{ x: number; y: number }> {
		const workArray = Array.from(data);
		let emptyLineIndex = workArray.findIndex((e) => e === "");
		workArray.splice(emptyLineIndex);

		const tP = new Array<{ x: number; y: number }>();

		for (const line of workArray) {
			const [a, b] = line.split(",");
			const x = parseInt(a);
			const y = parseInt(b);
			tP.push({ x, y });
		}

		return tP;
	}

	initializeFoldingInst(data: string[]): { axis: string; value: number }[] {
		const workArray = Array.from(data);
		let emptyLineIndex = workArray.findIndex((e) => e === "") + 1;
		workArray.splice(0, emptyLineIndex);

		const fI = [];

		for (const line of workArray) {
			const [a, b, c] = line.split(" ");
			const [axis, value] = c.split("=");

			fI.push({ axis: axis, value: parseInt(value) });
		}

		return fI;
	}
}
