import { AoCUtil } from "../util/AoCUtil";
import { TransparentPaperDecoder } from "./TransparentPaperDecoder";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "testData.txt",
  __dirname
);

let underTest: TransparentPaperDecoder;

beforeEach(() => {
  underTest = new TransparentPaperDecoder(testData);
});

describe("PathFinder", () => {
  describe("decodeTP", () => {
    it("should return 17", () => {
      expect(
        underTest.decodeTP(underTest.transparentPaper, underTest.foldingInstructions, 1).length
      ).toBe(17);
    });

    it("should return x=6, y=10 as first element", () => {
      expect(underTest.initializeTP(testData)[0].x).toBe(6);
      expect(underTest.initializeTP(testData)[0].y).toBe(10);
    });
  });

  describe("initializeTP", () => {
    it("should return array with 18 elements", () => {
      expect(underTest.initializeTP(testData).length).toBe(18);
    });

    it("should return x=6, y=10 as first element", () => {
      expect(underTest.initializeTP(testData)[0].x).toBe(6);
      expect(underTest.initializeTP(testData)[0].y).toBe(10);
    });
  });

  describe("initializeFoldingInst", () => {
    it("should return array with 2 elements", () => {
      expect(underTest.initializeFoldingInst(testData).length).toBe(2);
    });

    it("should return axis=y, value=7 as first element", () => {
      expect(underTest.initializeFoldingInst(testData)[0]).toEqual({ axis: "y", value: 7 });
    });
  });

  describe("foldHorizontalUp", () => {
    it("should return array with 2 elements", () => {
      const pointA = { x: 1, y: 2 };
      const pointB = { x: 1, y: 3 };
      const pointC = { x: 1, y: 5 };
      const tP = [pointA, pointB, pointC];
      expect(underTest.foldHorizontalUp(tP, 4).length).toBe(2);
    });

    // it("should return axis=y, value=7 as first element", () => {
    //   expect(underTest.initializeFoldingInst(testData)[0]).toEqual({ axis: "y", value: 7 });
    // });
  });

  describe("foldVerticalLeft", () => {
    it("should return array with 2 elements", () => {
      const pointA = { x: 2, y: 1 };
      const pointB = { x: 3, y: 1 };
      const pointC = { x: 5, y: 1 };
      const tP = [pointA, pointB, pointC];
      expect(underTest.foldVerticalLeft(tP, 4).length).toBe(2);
    });

    // it("should return axis=y, value=7 as first element", () => {
    //   expect(underTest.initializeFoldingInst(testData)[0]).toEqual({ axis: "y", value: 7 });
    // });
  });
});
