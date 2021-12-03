import { CourseCalculationService } from "./CourseCalculationService";
const testData = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];

const underTest = new CourseCalculationService(testData);

describe("DayOne Tests", () => {
  describe("calculateWithHorizontalPosAndDepth", () => {
    it("should return correct calc", () => {
      expect(underTest.calculateWithHorizontalPosAndDepth()).toBe(150);
    });
  });
  describe("findDepthIncreasementsInThreeMeasurementSlidingWindow", () => {
    it("should return correct calc", () => {
      expect(underTest.calculateWithHorizontalPosAndDepthAndAim()).toBe(900);
    });
  });
});
