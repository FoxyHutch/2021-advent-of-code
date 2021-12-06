import { Point } from "./Point";
import { Line } from "./Line";

let underTest: Line;

describe("Line", () => {
  describe("isHorizontalOrVertical", () => {
    it("should return true", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isHorizontalOrVertical()).toBe(true);
    });

    it("should return false", () => {
      const p1 = new Point(2, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isHorizontalOrVertical()).toBe(false);
    });
  });

  describe("getHighestXCoord", () => {
    it("should return 5", () => {
      const p1 = new Point(5, 1);
      const p2 = new Point(2, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestXCoord()).toBe(5);
    });

    it("should return 3", () => {
      const p1 = new Point(3, 1);
      const p2 = new Point(3, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestXCoord()).toBe(3);
    });
  });

  describe("getHighestYCoord", () => {
    it("should return 5", () => {
      const p1 = new Point(5, 5);
      const p2 = new Point(2, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestYCoord()).toBe(5);
    });

    it("should return 2", () => {
      const p1 = new Point(3, 2);
      const p2 = new Point(3, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestYCoord()).toBe(2);
    });
  });

  describe("getHorizontalOrVerticalPoints", () => {
    it("should return array with five elements", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(1, 5);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestYCoord()).toBe(5);
    });

    it("should return 2", () => {
      const p1 = new Point(3, 2);
      const p2 = new Point(3, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestYCoord()).toBe(2);
    });
  });
});
