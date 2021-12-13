import { strictEqual } from "assert";

export class PathFinder {
  caveMap: Record<string, Array<string>>;
  PATH_END_STRING = "end";
  PATH_START_STRING = "start";

  constructor(data: Array<string>) {
    this.caveMap = this.initializeMap(data);
  }

  calculateNumberOfPaths(
    start: string = this.PATH_START_STRING,
    currentCavePath: Array<string> = [],
    canVisitSmallCaveTwice: boolean = false
  ): number {
    if (start === this.PATH_END_STRING) {
      return 1;
    }

    const newCavePath = Array.from(currentCavePath);
    newCavePath.push(start);

    if (this.isSmallCave(start) && this.checkHowOftenInPath(start, newCavePath) === 2) {
      canVisitSmallCaveTwice = false;
    }

    const cavesToCheck: Array<string> = [];

    for (const cave of this.caveMap[start]) {
      if (this.isSmallCave(cave) && cave !== this.PATH_START_STRING) {
        if (this.checkHowOftenInPath(cave, newCavePath) === 1 && canVisitSmallCaveTwice) {
          cavesToCheck.push(cave);
        } else if (this.checkHowOftenInPath(cave, newCavePath) === 0) {
          cavesToCheck.push(cave);
        }
      } else if (cave !== this.PATH_START_STRING) {
        cavesToCheck.push(cave);
      }
    }

    let paths: Array<number> = [];

    for (const cave of cavesToCheck) {
      paths.push(this.calculateNumberOfPaths(cave, newCavePath, canVisitSmallCaveTwice));
    }

    return paths.reduce((sum, singlePath) => sum + singlePath, 0);
  }

  isSmallCave(cave: string): boolean {
    return cave.toLowerCase() === cave;
  }

  isInPath(cave: string, path: Array<string>): boolean {
    return path.includes(cave);
  }

  checkHowOftenInPath(cave: string, path: Array<string>): number {
    let count = 0;
    for (let index = 0; index < path.length; index++) {
      const element = path[index];
      if (element === cave) {
        count++;
      }
    }
    return count;
  }

  initializeMap(data: Array<string>): Record<string, Array<string>> {
    const map: Record<string, Array<string>> = {};
    for (const line of data) {
      const connectedCaves = line.split("-");
      const caveA = connectedCaves[0];
      const caveB = connectedCaves[1];
      map[caveA] = map[caveA] !== undefined ? map[caveA] : [];
      map[caveB] = map[caveB] !== undefined ? map[caveB] : [];
      map[caveA].push(caveB);
      map[caveB].push(caveA);
    }
    return map;
  }
}
