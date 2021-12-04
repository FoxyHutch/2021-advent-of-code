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

const underTest = new DiagnosticReportService(testData);

describe("DayThree Tests", () => {
  describe("calculatePowerConsumption", () => {
    it("should return correct calc", () => {
      expect(underTest.calculatePowerConsumption()).toBe(198);
    });
  });
  // describe("findDepthIncreasementsInThreeMeasurementSlidingWindow", () => {
  //   it("should return correct calc", () => {
  //     expect(underTest.calculateWithHorizontalPosAndDepthAndAim()).toBe(900);
  //   });
  // });
});

// describe("DayThree Tests", () => {
//   describe("calculateWithHorizontalPosAndDepth", () => {
//     it("should return correct calc", () => {
//       expect(underTest.calculateWithHorizontalPosAndDepth()).toBe(150);
//     });
//   });
//   describe("findDepthIncreasementsInThreeMeasurementSlidingWindow", () => {
//     it("should return correct calc", () => {
//       expect(underTest.calculateWithHorizontalPosAndDepthAndAim()).toBe(900);
//     });
//   });
// });
