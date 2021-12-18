import { BingoField } from "./BingoField";

export class BingoBoard {
	input: Array<string>;
	board: Array<Array<BingoField>>;

	constructor(input: Array<string>) {
		this.input = input;
		this.board = this.parseBoardFromStringArray(input);
	}

	markFields(draw: number): number | null {
		for (const row of this.board) {
			for (const field of row) {
				if (field.number === draw) {
					field.marked = true;
				}
			}
		}

		if (this.checkIfWon()) {
			const sumOfUmarked = this.calcSumOfUnmarkedNumbers();
			return sumOfUmarked * draw;
		}

		return null;
	}

	calcSumOfUnmarkedNumbers(): number {
		let sumOfUnmarked = 0;
		for (const row of this.board) {
			for (const field of row) {
				if (!field.marked) {
					sumOfUnmarked += field.number;
				}
			}
		}
		return sumOfUnmarked;
	}

	checkIfWon(): boolean {
		const rowWin = this.checkRows(this.board);
		const colWin = this.checkCols(this.board);

		return rowWin || colWin;
	}

	checkCols(board: Array<Array<BingoField>>): boolean {
		const numOfCols = board[0].length;
		const numOfRows = board.length;
		for (let col = 0; col < numOfCols; col++) {
			let colCount = 0;
			for (let row = 0; row < numOfRows; row++) {
				const field = board[row][col];
				if (field.marked) {
					colCount++;
				}
			}

			if (colCount === numOfRows) {
				return true;
			}
		}

		return false;
	}

	checkRows(board: Array<Array<BingoField>>): boolean {
		for (const row of board) {
			let rowCount = 0;
			for (const field of row) {
				if (field.marked) {
					rowCount++;
				}
			}

			if (rowCount === row.length) {
				return true;
			}
		}
		return false;
	}

	parseBoardFromStringArray(input: Array<string>): Array<Array<BingoField>> {
		const board = [];

		for (const row of input) {
			const boarRowFieldArray: Array<BingoField> = [];

			const boardRow = row.split(" ");

			for (const fieldNumber of boardRow) {
				if (fieldNumber !== "") {
					boarRowFieldArray.push(new BingoField(parseInt(fieldNumber)));
				}
			}

			board.push(boarRowFieldArray);
		}
		return board;
	}
}
