import { BingoBoard } from "./BingoBoard";
import { AoCUtil } from "../util/AoCUtil";
import { BingoGame } from "./BingoGame";
import { BingoField } from "./BingoField";

const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
	"testData.txt",
	__dirname
);

let underTest: BingoBoard;

let bingoField1: BingoField;
let bingoField2: BingoField;
let bingoField3: BingoField;
let bingoField4: BingoField;
let bingoField5: BingoField;
let bingoField6: BingoField;

let testDataRowTrue: Array<Array<BingoField>>;
let testDataColTrue: Array<Array<BingoField>>;
let testDataRowFalse: Array<Array<BingoField>>;
let testDataColFalse: Array<Array<BingoField>>;

beforeEach(() => {
	underTest = new BingoGame(testData).bingoBoards[1];
	bingoField1 = new BingoField(1);
	bingoField1.marked = true;

	bingoField2 = new BingoField(1);
	bingoField2.marked = true;

	bingoField3 = new BingoField(1);
	bingoField3.marked = true;

	bingoField4 = new BingoField(1);
	bingoField4.marked = true;

	bingoField5 = new BingoField(1);
	bingoField5.marked = true;

	bingoField6 = new BingoField(1);
	bingoField6.marked = false;

	testDataRowTrue = [[bingoField1, bingoField2, bingoField3, bingoField4, bingoField5]];
	testDataColTrue = [[bingoField1], [bingoField2], [bingoField3], [bingoField4], [bingoField5]];

	testDataRowFalse = [[bingoField1, bingoField2, bingoField3, bingoField4, bingoField6]];
	testDataColFalse = [[bingoField1], [bingoField2], [bingoField3], [bingoField4], [bingoField6]];
});

describe("DayFour Tests", () => {
	describe("extractBingoBoard", () => {
		it("should return array with 5 elements", () => {
			expect(underTest.parseBoardFromStringArray(underTest.input).length).toBe(5);
		});

		it("should return array inside an array with with 5 elements", () => {
			expect(underTest.parseBoardFromStringArray(underTest.input)[0].length).toBe(5);
		});
	});

	describe("checkRows", () => {
		it("should return true ", () => {
			expect(underTest.checkRows(testDataRowTrue)).toBe(true);
		});

		it("should return false ", () => {
			expect(underTest.checkRows(testDataRowFalse)).toBe(false);
		});
	});

	describe("checkCols", () => {
		it("should return true", () => {
			expect(underTest.checkCols(testDataColTrue)).toBe(true);
		});

		it("should return false", () => {
			expect(underTest.checkCols(testDataColFalse)).toBe(false);
		});
	});
});
