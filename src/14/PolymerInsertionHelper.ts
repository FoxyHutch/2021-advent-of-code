export class PolymerInsertionHelper {
  polymerTemplate: string;
  insertionRules: Array<{ adjacentElem: string; insertElem: string }>;

  constructor(data: Array<string>) {
    this.polymerTemplate = this.initializePolymerTemplate(data);
    this.insertionRules = this.initializeInsertionRules(data);
  }

  initializeInsertionRules(data: string[]): { adjacentElem: string; insertElem: string }[] {
    const insertionRules = [];
    for (let index = 2; index < data.length; index++) {
      const element = data[index];
      const [adjacentElem, insertElem] = element.split(" -> ");
      insertionRules.push({ adjacentElem, insertElem });
    }
    return insertionRules;
  }

  initializePolymerTemplate(data: string[]): string {
    return data[0];
  }

  calcPolymerForSteps(
    steps: number,
    template: string,
    rules: Array<{ adjacentElem: string; insertElem: string }>
  ): string {
    let count = 0;
    let newPolymer = template;
    let currPolymer = template;
    while (count < steps) {
      currPolymer = newPolymer;
      let letterInsertionCount = 0;
      for (let index = 0; index < currPolymer.length - 1; index++) {
        const currPair = currPolymer[index] + currPolymer[index + 1];
        const insert = rules.find(
          (r) => r.adjacentElem[0] === currPair[0] && r.adjacentElem[1] === currPair[1]
        )?.insertElem;
        if (insert !== undefined) {
          letterInsertionCount++;
          newPolymer =
            newPolymer.slice(0, index + letterInsertionCount) +
            insert +
            newPolymer.slice(index + letterInsertionCount);
        }
      }
      count++;
    }
    return newPolymer;
  }

  subtractLeastFromMostCommonElementQuantity(polymer: string): number {
    const arrSinglePolymer = polymer.split("");
    const polymerCount: Array<{ letter: string; occurs: number }> = [];
    for (const singlePolymer of arrSinglePolymer) {
      const searchIndex = polymerCount.findIndex((p) => p.letter === singlePolymer);
      if (searchIndex !== -1) {
        polymerCount[searchIndex].occurs++;
      } else {
        polymerCount.push({ letter: singlePolymer, occurs: 1 });
      }
    }
    polymerCount.sort((p1, p2) => p1.occurs - p2.occurs);
    const mostCommon = polymerCount[polymerCount.length - 1].occurs;
    const leastCommon = polymerCount[0].occurs;

    return mostCommon - leastCommon;
  }
}
