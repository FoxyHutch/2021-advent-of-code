import { AoCUtil } from "../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "testData.txt",
  __dirname
);

// let underTest: FlashPrediction;

// beforeEach(() => {
//   underTest = new FlashPrediction(testData);
// });

// describe("FlashPrediction", () => {
//   describe("calculateFlashesForStepAmount", () => {
//     it("should return 1656 after 100 steps", () => {
//       expect(underTest.calculateFlashesForStepAmount(100)).toBe(1656);
//     });
//   });

// });
