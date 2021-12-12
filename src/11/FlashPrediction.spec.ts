import { FlashPrediction } from "./FlashPrediction";
import { AoCUtil } from "../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "testData.txt",
  __dirname
);

const smallTestData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "smallTestData.txt",
  __dirname
);

const smallestTestData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "smallestTestData.txt",
  __dirname
);

let underTest: FlashPrediction;

beforeEach(() => {
  underTest = new FlashPrediction(testData);
});

describe("FlashPrediction", () => {
  describe("calculateFlashesForStepAmount", () => {
    it("should return 1656 after 100 steps", () => {
      expect(underTest.calculateFlashesForStepAmount(100)).toBe(1656);
    });

    it("should return 9 after one step with small testdata", () => {
      const underTest = new FlashPrediction(smallTestData);
      expect(underTest.calculateFlashesForStepAmount(1)).toBe(9);
    });

    it("should return 9 after two steps with small testdata", () => {
      const underTest = new FlashPrediction(smallTestData);
      expect(underTest.calculateFlashesForStepAmount(2)).toBe(9);
    });

    it("should return 0 after one step with testdata", () => {
      expect(underTest.calculateFlashesForStepAmount(1)).toBe(0);
    });

    it("should return 35 after two steps with testdata", () => {
      const underTest = new FlashPrediction(testData);
      expect(underTest.calculateFlashesForStepAmount(2)).toBe(35);
    });
  });

  describe("incrementOctopusEnergylevel", () => {
    it("should return energylevel of 6 on first Octopus", () => {
      underTest.incrementOctopusEnergylevel();
      expect(underTest.mapOfOctopuses[0][0].energylevel).toBe(6);
    });
  });

  describe("findAdjacentOctopus", () => {
    it("should return array with 8 elements", () => {
      expect(underTest.findAdjacentOctopuses(2, 2).length).toBe(8);
    });

    it("should have an item with energylevel 7 as first element", () => {
      expect(underTest.findAdjacentOctopuses(2, 2)[0].energylevel).toBe(7);
    });
  });

  describe("caclulateNumberOfFlashingOctopus", () => {
    it("should return 2", () => {
      const underTest = new FlashPrediction(smallestTestData);
      underTest.incrementOctopusEnergylevel();
      expect(underTest.caclulateNumberOfFlashingOctopus()).toBe(2);
    });

    it("should have an item with energylevel 7 as first element", () => {
      expect(underTest.findAdjacentOctopuses(2, 2)[0].energylevel).toBe(7);
    });
  });
});
