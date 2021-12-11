import { FlashPrediction } from "./FlashPrediction";
import { AoCUtil } from "../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "testData.txt",
  __dirname
);

let underTest: FlashPrediction;

beforeEach(() => {
  underTest = new FlashPrediction(testData, true);
});

// describe("HydrothermalVentDetection", () => {
//   describe("determineNumberOfDangerousPoints with diagonals", () => {
//     it("should return 12", () => {
//       expect(underTest.determineNumberOfDangerousPoints()).toBe(12);
//     });
//   });
