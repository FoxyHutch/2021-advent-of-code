import { PathFinder } from "./PathFinder";
import { AoCUtil } from "../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "testData.txt",
  __dirname
);

const smallerTestData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "smallerTestData.txt",
  __dirname
);

const smallestTestData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
  "smallestTestData.txt",
  __dirname
);

let underTest: PathFinder;

beforeEach(() => {
  underTest = new PathFinder(testData);
});

describe("PathFinder", () => {
  describe("calculateAmountOfPaths", () => {
    it("should return 10 for smallestTestData", () => {
      underTest = new PathFinder(smallestTestData);
      expect(underTest.calculateNumberOfPaths()).toBe(10);
    });

    it("should return 19 for smallerTestData", () => {
      underTest = new PathFinder(smallerTestData);
      expect(underTest.calculateNumberOfPaths()).toBe(19);
    });

    it("should return 226 for smallTestData", () => {
      underTest = new PathFinder(testData);
      expect(underTest.calculateNumberOfPaths()).toBe(226);
    });

    it("should return 36 for smallestTestData with visiting one small cave twice", () => {
      underTest = new PathFinder(smallestTestData);
      expect(underTest.calculateNumberOfPaths(underTest.PATH_START_STRING, [], true)).toBe(36);
    });

    it("should return 103 for smallerTestData with visiting one small cave twice", () => {
      underTest = new PathFinder(smallerTestData);
      expect(underTest.calculateNumberOfPaths(underTest.PATH_START_STRING, [], true)).toBe(103);
    });

    it("should return 3509 for smallTestData with visiting one small cave twice", () => {
      underTest = new PathFinder(testData);
      expect(underTest.calculateNumberOfPaths(underTest.PATH_START_STRING, [], true)).toBe(3509);
    });
  });
});
