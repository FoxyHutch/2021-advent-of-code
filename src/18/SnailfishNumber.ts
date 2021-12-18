export interface Pair {
	x: number | Pair;
	y: number | Pair;
}

export class SnailfishNumber {
	pair: Pair;

	constructor(input: string) {
		this.pair = this.initializePair(input);
	}

	initializePair(input: string): Pair {
		throw new Error("Method not implemented.");
	}
}
