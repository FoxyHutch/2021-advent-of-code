export class CourseCalculationService {
	instructions: Array<string>;

	constructor(entries: Array<string>) {
		this.instructions = entries;
	}

	calculateWithHorizontalPosAndDepth(): number {
		let horizontalPos = 0;
		let depth = 0;

		for (const line of this.instructions) {
			if (line.startsWith("forward")) {
				horizontalPos += parseInt(line.split(" ")[1]);
			}

			if (line.startsWith("down")) {
				depth += parseInt(line.split(" ")[1]);
			}

			if (line.startsWith("up")) {
				depth -= parseInt(line.split(" ")[1]);
			}
		}

		return horizontalPos * depth;
	}

	calculateWithHorizontalPosAndDepthAndAim(): number {
		let horizontalPos = 0;
		let depth = 0;
		let aim = 0;

		for (const line of this.instructions) {
			if (line.startsWith("forward")) {
				horizontalPos += parseInt(line.split(" ")[1]);
				depth += aim * parseInt(line.split(" ")[1]);
			}

			if (line.startsWith("down")) {
				aim += parseInt(line.split(" ")[1]);
			}

			if (line.startsWith("up")) {
				aim -= parseInt(line.split(" ")[1]);
			}
		}

		return horizontalPos * depth;
	}
}
