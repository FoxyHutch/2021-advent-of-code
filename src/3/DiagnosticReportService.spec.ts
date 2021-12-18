import { BinarySearchResult } from "./types";
import { DiagnosticReportService } from "./DiagnosticReportService";
const testData = [
	"00100",
	"11110",
	"10110",
	"10111",
	"10101",
	"01111",
	"00111",
	"11100",
	"10000",
	"11001",
	"00010",
	"01010",
];

const testDataWithEquals = ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"];

const underTest = new DiagnosticReportService(testData);

describe("DayThree Tests", () => {
	describe("calculatePowerConsumption", () => {
		it("should return correct calc", () => {
			expect(underTest.calculatePowerConsumption()).toBe(198);
		});
	});
	describe("calculateLifeSupportRating", () => {
		it("should return correct calc", () => {
			expect(underTest.calculateLifeSupportRating()).toBe(230);
		});
	});
	describe("findMostCommonBitInReportCol", () => {
		it("should return One", () => {
			expect(underTest.findMostCommonBitInReportCol(testData, 0)).toBe(BinarySearchResult.ONE);
		});
		it("should return Equals", () => {
			expect(underTest.findMostCommonBitInReportCol(testDataWithEquals, 0)).toBe(
				BinarySearchResult.EQUALS
			);
		});
		it("should return Zero", () => {
			expect(underTest.findMostCommonBitInReportCol(testData, 1)).toBe(BinarySearchResult.ZERO);
		});
	});
	describe("binaryStringToDecimal", () => {
		it("should return correct result", () => {
			expect(underTest.binaryStringToDecimal("10")).toBe(2);
		});
		it("should return correct result", () => {
			expect(underTest.binaryStringToDecimal("1")).toBe(1);
		});
	});
	describe("binaryArrayToDecimal", () => {
		it("should return correct result", () => {
			expect(underTest.binaryArrayToDecimal([0])).toBe(0);
		});
		it("should return correct result", () => {
			expect(underTest.binaryArrayToDecimal([1, 0])).toBe(2);
		});
	});
	describe("filterReportByBitCriteria", () => {
		it("should return correct result filtered by most common", () => {
			expect(underTest.filterReportByBitCriteria(testData, "1")).toBe("10111");
		});
		it("should return correct result", () => {
			expect(underTest.filterReportByBitCriteria(testData, "0")).toBe("01010");
		});
	});
});
