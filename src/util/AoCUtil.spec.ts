import { AoCUtil } from "./AoCUtil";
const arrayWithCommas = ["a", ",", "b", ","];
const arrayWithCommasAndMoreElements = ["abc", "b", "c", ",", "b", ","];
const arrayWithMultipleCommas = ["a", "b", "c", ",", ",", "b", ","];
const arrayWithBeginningSeparator = [",", "a", "b", "c", ",", ",", "b", ","];
const arrayWithEmptyStrings = ["a", "", "b", ""];

const underTest = new AoCUtil();

describe("AoCUtil", () => {
  describe("separateArrayOfStringByDelimiter", () => {
    describe("with simple List", () => {
      it("should return array with two elements", () => {
        expect(underTest.separateArrayOfStringByDelimiter(arrayWithCommas, ",").length).toBe(2);
      });

      it("should have 'a' as first element in first array", () => {
        expect(underTest.separateArrayOfStringByDelimiter(arrayWithCommas, ",")[0][0]).toBe("a");
      });
    });

    describe("with list with multiple adjacent delimiters", () => {
      it("should return array with two elements", () => {
        expect(
          underTest.separateArrayOfStringByDelimiter(arrayWithMultipleCommas, ",").length
        ).toBe(2);
      });

      it("should have 'a' as first element in first array", () => {
        expect(underTest.separateArrayOfStringByDelimiter(arrayWithMultipleCommas, ",")[0][0]).toBe(
          "a"
        );
      });
    });

    describe("with list with multiple adjacent together belonging entries", () => {
      it("should return array with two elements", () => {
        expect(
          underTest.separateArrayOfStringByDelimiter(arrayWithCommasAndMoreElements, ",").length
        ).toBe(2);
      });

      it("should have 'a' as first element in first array", () => {
        expect(
          underTest.separateArrayOfStringByDelimiter(arrayWithCommasAndMoreElements, ",")[0][0]
        ).toBe("abc");
      });
    });

    describe("with list with multiple adjacent together belonging entries", () => {
      it("should return array with two elements", () => {
        expect(
          underTest.separateArrayOfStringByDelimiter(arrayWithBeginningSeparator, ",").length
        ).toBe(2);
      });

      it("should have 'a' as first element in first array", () => {
        expect(
          underTest.separateArrayOfStringByDelimiter(arrayWithBeginningSeparator, ",")[0][0]
        ).toBe("a");
      });
    });

    describe("with list with empty string as delimiters", () => {
      it("should return array with two elements", () => {
        expect(underTest.separateArrayOfStringByDelimiter(arrayWithEmptyStrings, "").length).toBe(
          2
        );
      });

      it("should have 'a' as first element in first array", () => {
        expect(underTest.separateArrayOfStringByDelimiter(arrayWithEmptyStrings, "")[0][0]).toBe(
          "a"
        );
      });
    });
  });
});
