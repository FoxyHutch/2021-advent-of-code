import { SonarSweepService } from "./SonarSweepService";

const testData = ["199", "200", "208", "210", "200", "207", "240", "269", "260", "263"];

const underTest = new SonarSweepService(testData);

describe("DayOne Tests", () => {
  describe("findDepthIncreasements", () => {
    it("should return correct count", () => {
      expect(underTest.findDepthIncreasements()).toBe(7);
    });
  });
  describe("findDepthIncreasementsInThreeMeasurementSlidingWindow", () => {
    it("should return correct count", () => {
      expect(underTest.findDepthIncreasementsInThreeMeasurementSlidingWindow()).toBe(5);
    });
  });
});
