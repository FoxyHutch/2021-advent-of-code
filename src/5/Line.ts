import { Point } from "./Point";
export class Line {
  pointOne: Point;
  pointTwo: Point;

  constructor(p1: Point, p2: Point) {
    this.pointOne = p1;
    this.pointTwo = p2;
  }

  isHorizontalOrVertical(): boolean {
    return (
      this.pointOne.coordX === this.pointTwo.coordX || this.pointOne.coordY === this.pointTwo.coordY
    );
  }

  getHorizontalOrVerticalPoints(): Array<Point> {
    const points: Array<Point> = [];
    if (this.isHorizontalOrVertical()) {
      if (this.pointOne.coordX === this.pointTwo.coordX) {
        // Both Points on X Coord. Point have to be build on Y axis
        const lowerY = this.getLowestYCoord();
        const higherY = this.getHighestYCoord();
        for (let index = lowerY; index <= higherY; index++) {
          points.push(new Point(this.pointOne.coordX, index));
        }
      } else {
        // Both Points on Y Coord. Point have to be build on X axis
        const lowerX = this.getLowestXCoord();
        const higherX = this.getHighestXCoord();
        for (let index = lowerX; index <= higherX; index++) {
          points.push(new Point(index, this.pointOne.coordY));
        }
      }
    }
    return points;
  }

  getHighestXCoord(): number {
    return this.pointOne.coordX > this.pointTwo.coordX
      ? this.pointOne.coordX
      : this.pointTwo.coordX;
  }

  getLowestXCoord(): number {
    return this.pointOne.coordX < this.pointTwo.coordX
      ? this.pointOne.coordX
      : this.pointTwo.coordX;
  }

  getHighestYCoord(): number {
    return this.pointOne.coordY > this.pointTwo.coordY
      ? this.pointOne.coordY
      : this.pointTwo.coordY;
  }

  getLowestYCoord(): number {
    return this.pointOne.coordY < this.pointTwo.coordY
      ? this.pointOne.coordY
      : this.pointTwo.coordY;
  }
}
