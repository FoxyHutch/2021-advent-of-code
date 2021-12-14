import { PolymerInsertionHelper } from "./PolymerInsertionHelper";
import { AoCUtil } from "./../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "testData.txt",
  __dirname
);

let underTest: PolymerInsertionHelper;

beforeEach(() => {
  underTest = new PolymerInsertionHelper(testData);
});

describe("PolymerInsertionHelper", () => {
  describe("subtractLeastFromMostCommonElementQuantity", () => {
    it("should return 1588", () => {
      const polymer = underTest.calcPolymerForSteps(
        10,
        underTest.polymerTemplate,
        underTest.insertionRules
      );
      expect(underTest.subtractLeastFromMostCommonElementQuantity(polymer)).toBe(1588);
    });

    it("should return 2188189693529", () => {
      const polymer = underTest.calcPolymerForSteps(
        40,
        underTest.polymerTemplate,
        underTest.insertionRules
      );
      expect(underTest.subtractLeastFromMostCommonElementQuantity(polymer)).toBe(2188189693529);
    });
  });

  describe("calcPolymerForSteps", () => {
    it("should return 'NCNBCHB' after one step", () => {
      const polymer = underTest.calcPolymerForSteps(
        1,
        underTest.polymerTemplate,
        underTest.insertionRules
      );
      expect(polymer).toBe("NCNBCHB");
    });

    it("should return 'NBCCNBBBCBHCB' after two steps", () => {
      const polymer = underTest.calcPolymerForSteps(
        2,
        underTest.polymerTemplate,
        underTest.insertionRules
      );
      expect(polymer).toBe("NBCCNBBBCBHCB");
    });
  });

  describe("initializeInsertionRules", () => {
    it("should return array with 16 elements", () => {
      expect(underTest.initializeInsertionRules(testData).length).toBe(16);
    });
  });

  describe("initializePolymerTemplate", () => {
    it("should return 'NNCB'", () => {
      expect(underTest.initializePolymerTemplate(testData)).toBe("NNCB");
    });
  });
});
