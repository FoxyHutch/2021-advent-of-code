export class FlashPrediction {
  mapOfOctopuses: Array<Array<number>>;

  constructor(data: Array<string>) {
    this.mapOfOctopuses = this.initializeInput(data);
  }

  initializeInput(data: Array<string>): Array<Array<number>> {
    const input: Array<Array<number>> = [];
    for (let lineInArray = 0; lineInArray < data.length; lineInArray++) {
      const lineOfNumbers: Array<number> = [];
      const singleLine = data[lineInArray];
      for (let indexChar = 0; indexChar < singleLine.length; indexChar++) {
        const num = parseInt(singleLine.charAt(indexChar));
        lineOfNumbers.push(num);
      }
      input.push(lineOfNumbers);
    }

    return input;
  }
}
