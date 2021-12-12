import { Octopus } from "./Octopus";
export class FlashPrediction {
  mapOfOctopuses: Array<Array<Octopus>>;

  constructor(data: Array<string>) {
    this.mapOfOctopuses = this.initializeInput(data);
  }

  initializeInput(data: Array<string>): Array<Array<Octopus>> {
    const input: Array<Array<Octopus>> = [];
    for (let lineInArray = 0; lineInArray < data.length; lineInArray++) {
      const lineOfOctopuses: Array<Octopus> = [];
      const singleLine = data[lineInArray];
      for (let indexChar = 0; indexChar < singleLine.length; indexChar++) {
        const num = parseInt(singleLine.charAt(indexChar));
        lineOfOctopuses.push(new Octopus(num));
      }
      input.push(lineOfOctopuses);
    }

    return input;
  }

  calculateFlashesForStepAmount(stepAmount: number): number {
    let flashCount: number = 0;

    for (let index = 0; index < stepAmount; index++) {
      this.incrementOctopusEnergylevel();

      let numberOfFlashingOctopus = this.caclulateNumberOfFlashingOctopus();

      while (numberOfFlashingOctopus > 0) {
        // calculate every single Octopus
        for (let lineIndex = 0; lineIndex < this.mapOfOctopuses.length; lineIndex++) {
          const lineOfOctopuses = this.mapOfOctopuses[lineIndex];
          for (let colIndex = 0; colIndex < lineOfOctopuses.length; colIndex++) {
            const currentOcotpus = this.mapOfOctopuses[lineIndex][colIndex];
            if (currentOcotpus.energylevel > 9 && !currentOcotpus.didFlash) {
              const adjacentOctopus = this.findAdjacentOctopuses(colIndex, lineIndex);

              for (const octopus of adjacentOctopus) {
                octopus.energylevel++;
              }

              currentOcotpus.didFlash = true;
              flashCount++;
              numberOfFlashingOctopus = this.caclulateNumberOfFlashingOctopus();
            }
          }
        }
      }

      this.setEnergyLevelsOnFalshedOctopus();
      this.resetFlashesOnOctopus();
    }
    return flashCount;
  }

  setEnergyLevelsOnFalshedOctopus() {
    for (const lineOfOctopus of this.mapOfOctopuses) {
      for (const octopus of lineOfOctopus) {
        if (octopus.didFlash) {
          octopus.energylevel = 0;
        }
      }
    }
  }

  resetFlashesOnOctopus() {
    for (const lineOfOctopus of this.mapOfOctopuses) {
      for (const octopus of lineOfOctopus) {
        octopus.didFlash = false;
      }
    }
  }

  findAdjacentOctopuses(colIndex: number, lineIndex: number): Array<Octopus> {
    const adjacentOctopus: Array<Octopus> = [];

    for (let posY = lineIndex - 1; posY <= lineIndex + 1; posY++) {
      for (let posX = colIndex - 1; posX <= colIndex + 1; posX++) {
        if (
          !(colIndex === posX && lineIndex === posY) &&
          posY < this.mapOfOctopuses.length &&
          posX < this.mapOfOctopuses[0].length &&
          posY >= 0 &&
          posX >= 0
        ) {
          if (this.mapOfOctopuses !== undefined && this.mapOfOctopuses[posY][posX] !== undefined) {
            adjacentOctopus.push(this.mapOfOctopuses[posY][posX]);
          }
        }
      }
    }

    return adjacentOctopus;
  }

  caclulateNumberOfFlashingOctopus(): number {
    let count = 0;
    for (let lineIndex = 0; lineIndex < this.mapOfOctopuses.length; lineIndex++) {
      const lineOfOctopus = this.mapOfOctopuses[lineIndex];
      for (const octopus of lineOfOctopus) {
        if (octopus.energylevel > 9 && !octopus.didFlash) {
          count++;
        }
      }
    }
    return count;
  }

  incrementOctopusEnergylevel() {
    for (let lineIndex = 0; lineIndex < this.mapOfOctopuses.length; lineIndex++) {
      const lineOfOctopus = this.mapOfOctopuses[lineIndex];
      for (const octopus of lineOfOctopus) {
        octopus.energylevel++;
      }
    }
  }
}
