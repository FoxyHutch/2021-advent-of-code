import { Point } from "./Point";
import { Line } from "./Line";

let underTest: Line;

describe("Line", () => {
  describe("isVertical", () => {
    it("should return true", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isVertical(p1, p2)).toBe(true);
    });

    it("should return false", () => {
      const p1 = new Point(2, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isVertical(p1, p2)).toBe(false);
    });
  });

  describe("isHorizontal", () => {
    it("should return true", () => {
      const p1 = new Point(2, 1);
      const p2 = new Point(3, 1);
      underTest = new Line(p1, p2);
      expect(underTest.isHorizontal(p1, p2)).toBe(true);
    });

    it("should return false", () => {
      const p1 = new Point(2, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isHorizontal(p1, p2)).toBe(false);
    });
  });

  describe("isDiagonal", () => {
    it("should return true", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(2, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isDiagonal(p1, p2)).toBe(true);
    });

    it("should return true", () => {
      const p1 = new Point(2, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isDiagonal(p1, p2)).toBe(true);
    });

    it("should return false", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(1, 2);
      underTest = new Line(p1, p2);
      expect(underTest.isDiagonal(p1, p2)).toBe(false);
    });
  });

  describe("getHighestXCoord", () => {
    it("should return 5", () => {
      const p1 = new Point(5, 1);
      const p2 = new Point(2, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestXCoord(p1, p2)).toBe(5);
    });

    it("should return 3", () => {
      const p1 = new Point(3, 1);
      const p2 = new Point(3, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestXCoord(p1, p2)).toBe(3);
    });
  });

  describe("getHighestYCoord", () => {
    it("should return 5", () => {
      const p1 = new Point(5, 5);
      const p2 = new Point(2, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestYCoord(p1, p2)).toBe(5);
    });

    it("should return 2", () => {
      const p1 = new Point(3, 2);
      const p2 = new Point(3, 2);
      underTest = new Line(p1, p2);
      expect(underTest.getHighestYCoord(p1, p2)).toBe(2);
    });
  });

  describe("buildHorizontalLine", () => {
    it("should return array with five elements", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(5, 1);
      underTest = new Line(p1, p2);
      expect(underTest.buildHorizontalLine(p1, p2).length).toBe(5);
    });

    it("should return 2", () => {
      const p1 = new Point(1, 2);
      const p2 = new Point(2, 2);
      underTest = new Line(p1, p2);
      expect(underTest.buildHorizontalLine(p1, p2).length).toBe(2);
    });

    it("should contain required elements", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(4, 1);
      underTest = new Line(p1, p2);

      const p3 = new Point(2, 1);
      const p4 = new Point(3, 1);

      expect(underTest.buildHorizontalLine(p1, p2).length).toBe(4);
      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
      expect(underTest.points).toContainEqual<Point>(p4);
    });
  });

  describe("buildVerticalLine", () => {
    it("should return array with five elements", () => {
      const p1 = new Point(1, 1);
      const p2 = new Point(1, 5);
      underTest = new Line(p1, p2);
      expect(underTest.buildVerticalLine(p1, p2).length).toBe(5);
    });

    it("should return 2", () => {
      const p1 = new Point(1, 2);
      const p2 = new Point(1, 3);
      underTest = new Line(p1, p2);
      expect(underTest.buildVerticalLine(p1, p2).length).toBe(2);
    });

    it("should contain required points", () => {
      const p1 = new Point(1, 2);
      const p2 = new Point(1, 4);
      underTest = new Line(p1, p2);

      const p3 = new Point(1, 3);

      expect(underTest.buildVerticalLine(p1, p2).length).toBe(3);
      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
    });
  });

  describe("buildDiagonalLine", () => {
    it("should return array with five elements", () => {
      const p1 = new Point(5, 1);
      const p2 = new Point(1, 5);
      underTest = new Line(p1, p2);
      expect(underTest.buildDiagonalLine(p1, p2).length).toBe(5);
    });

    it("should return array with three elements", () => {
      const p1 = new Point(3, 1);
      const p2 = new Point(1, 3);
      underTest = new Line(p1, p2);
      expect(underTest.buildDiagonalLine(p1, p2).length).toBe(3);
    });

    it("should return array with five elements", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(0, 4);
      const p2 = new Point(4, 0);
      underTest = new Line(p1, p2);
      expect(underTest.buildDiagonalLine(p1, p2).length).toBe(5);
    });

    it("should contain points 0,3/1,2/2,1/3,0", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(0, 3);
      const p2 = new Point(3, 0);
      underTest = new Line(p1, p2);

      const p3 = new Point(1, 2);
      const p4 = new Point(2, 1);

      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
      expect(underTest.points).toContainEqual<Point>(p4);
    });

    it("should contain points 1,1/2,2/3,3", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(1, 1);
      const p2 = new Point(3, 3);
      underTest = new Line(p1, p2);

      const p3 = new Point(2, 2);

      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
    });

    it("should contain required points", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(8, 0);
      const p2 = new Point(0, 8);
      underTest = new Line(p1, p2);

      const p3 = new Point(7, 1);
      const p4 = new Point(6, 2);
      const p5 = new Point(5, 3);
      const p6 = new Point(4, 4);
      const p7 = new Point(3, 5);
      const p8 = new Point(2, 6);
      const p9 = new Point(1, 7);

      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
      expect(underTest.points).toContainEqual<Point>(p4);
      expect(underTest.points).toContainEqual<Point>(p5);
      expect(underTest.points).toContainEqual<Point>(p6);
      expect(underTest.points).toContainEqual<Point>(p7);
      expect(underTest.points).toContainEqual<Point>(p8);
      expect(underTest.points).toContainEqual<Point>(p9);
    });

    it("should contain required points", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(0, 0);
      const p2 = new Point(8, 8);
      underTest = new Line(p1, p2);

      const p3 = new Point(1, 1);
      const p4 = new Point(2, 2);
      const p5 = new Point(3, 3);
      const p6 = new Point(4, 4);
      const p7 = new Point(5, 5);
      const p8 = new Point(6, 6);
      const p9 = new Point(7, 7);

      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
      expect(underTest.points).toContainEqual<Point>(p4);
      expect(underTest.points).toContainEqual<Point>(p5);
      expect(underTest.points).toContainEqual<Point>(p6);
      expect(underTest.points).toContainEqual<Point>(p7);
      expect(underTest.points).toContainEqual<Point>(p8);
      expect(underTest.points).toContainEqual<Point>(p9);
    });

    it("should contain required points", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(6, 4);
      const p2 = new Point(2, 0);
      underTest = new Line(p1, p2);

      const p3 = new Point(5, 3);
      const p4 = new Point(4, 2);
      const p5 = new Point(3, 1);

      expect(underTest.points).toContainEqual<Point>(p1);
      expect(underTest.points).toContainEqual<Point>(p2);
      expect(underTest.points).toContainEqual<Point>(p3);
      expect(underTest.points).toContainEqual<Point>(p4);
      expect(underTest.points).toContainEqual<Point>(p5);
    });
  });

  describe("buildLine", () => {
    it("should return array with five elements", () => {
      const p1 = new Point(5, 1);
      const p2 = new Point(1, 5);
      underTest = new Line(p1, p2);
      expect(underTest.buildLine(p1, p2).length).toBe(5);
      expect(underTest.isDiagonal(p1, p2)).toBe(true);
    });

    it("should return 3", () => {
      const p1 = new Point(3, 1);
      const p2 = new Point(1, 3);
      underTest = new Line(p1, p2);
      expect(underTest.buildLine(p1, p2).length).toBe(3);
    });

    it("should return 5", () => {
      // 04, 13, 22, 31, 40
      const p1 = new Point(1, 4);
      const p2 = new Point(1, 0);
      underTest = new Line(p1, p2);
      expect(underTest.buildLine(p1, p2).length).toBe(5);
    });
  });
});
