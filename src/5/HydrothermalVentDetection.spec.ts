import { HydrothermalVentDetection } from "./HydrothermalVentDetection";
import { AoCUtil } from "./../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
	"testData.txt",
	__dirname
);

let underTest: HydrothermalVentDetection;

beforeEach(() => {
	underTest = new HydrothermalVentDetection(testData, true);
});

describe("HydrothermalVentDetection", () => {
	describe("determineNumberOfDangerousPoints with diagonals", () => {
		it("should return 12", () => {
			expect(underTest.determineNumberOfDangerousPoints()).toBe(12);
		});
	});

	describe("determineNumberOfDangerousPoints without diagonals", () => {
		it("should return 5", () => {
			const underTestWithoutDiagonals = new HydrothermalVentDetection(testData, false);
			expect(underTestWithoutDiagonals.determineNumberOfDangerousPoints()).toBe(5);
		});
	});

	describe("splitLinebuildingInstructions", () => {
		it("should return Array with two elements", () => {
			const toSplit = "0,9 -> 5,9";
			expect(underTest.splitLinebuildingInstructions(toSplit).length).toBe(2);
		});

		it("should contain ten lines after initializing", () => {
			expect(underTest.lines.length).toBe(10);
		});

		it("should should have 0,9 as first element", () => {
			const toSplit = "0,9 -> 5,9";
			expect(underTest.splitLinebuildingInstructions(toSplit)[0]).toBe("0,9");
		});
	});

	describe("initializeLines", () => {
		it("should return array with one element", () => {
			const testData = ["0,9 -> 5,9"];
			expect(underTest.initializeLines(testData).length).toBe(1);
		});

		it("should return line with two points ", () => {
			const testData = ["0,9 -> 5,9"];
			expect(underTest.initializeLines(testData)[0].pointOne).toBeTruthy;
			expect(underTest.initializeLines(testData)[0].pointTwo).toBeTruthy;
		});

		it("should return array with two elements", () => {
			const testData = ["0,9 -> 5,9", "1,2 -> 2,1"];
			expect(underTest.initializeLines(testData).length).toBe(2);
		});
	});
});
