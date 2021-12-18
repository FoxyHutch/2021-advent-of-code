import { WinnerLoser } from "./types";
import { AoCUtil } from "../util/AoCUtil";
import { BingoGame } from "./BingoGame";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
	"testData.txt",
	__dirname
);

let underTest: BingoGame;

beforeEach(() => {
	underTest = new BingoGame(testData);
});

describe("DayFour Tests", () => {
	describe("extractBingoBoards", () => {
		it("should extract three boards", () => {
			expect(underTest.extractBingoBoards(testData).length).toBe(3);
		});
	});
	describe("extractBingoInstructions", () => {
		it("should return an array of size 27", () => {
			expect(underTest.extractBingoInstructions(testData).length).toBe(27);
		});

		it("should start with 7", () => {
			expect(underTest.extractBingoInstructions(testData)[0]).toBe(7);
		});
	});
	describe("playGame and get first", () => {
		it("should return 4512", () => {
			expect(underTest.playGame(WinnerLoser.WINNER)).toBe(4512);
		});
	});
	describe("playGame and get last", () => {
		it("should return 1924", () => {
			expect(underTest.playGame(WinnerLoser.LOSER)).toBe(1924);
		});
	});
});
