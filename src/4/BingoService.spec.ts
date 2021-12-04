import { FileUtil } from "./../util/FileUtil";
import { BinarySearchResult } from "./types";
import { BingoService } from "./BingoService";
const testData = new FileUtil().getEntriesFromTextFileByNameAndFolder("testData.txt", __dirname);

const underTest = new BingoService(testData);

describe("DayThree Tests", () => {
  // describe("calculatePowerConsumption", () => {
  //   it("should return correct calc", () => {
  //     expect(underTest.calculatePowerConsumption()).toBe(198);
  //   });
  // });
});
