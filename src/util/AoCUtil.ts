import fs from "fs";
import path from "path";

export class AoCUtil {
  getEntriesFromTextFileByNameAndFolder(filename: string, directoryPath: string): Array<string> {
    const inputPath = path.resolve(directoryPath, filename);
    return fs.readFileSync(inputPath).toString().split("\n");
  }

  getEntriesFromInputNamedTextFile(directoryPath: string): Array<string> {
    const inputPath = path.resolve(directoryPath, "input.txt");
    const data = fs.readFileSync(inputPath).toString().split("\n");

    while (data[data.length - 1].length < 1) {
      data.pop();
    }
    return data;
  }

  /**
   * Utilmethod for separating an array of simple Strings into multiple Arrays.
   * In this calendar, you are often provided with some kind of textfile based input.
   * Sometimes this input contains multiple types of different information,
   * separated by some kind of delimiter (for example blank lines).
   *
   * @param data
   * @param delimiter
   * @returns
   */
  separateArrayOfStringByDelimiter(data: Array<string>, delimiter: string): Array<Array<string>> {
    const arrayToSplit = Array.from(data);
    const separatedArray = [];

    let countItemBelongingTogether = 0;
    let arrayWithTogetherBelongingItems: Array<string> = [];
    while (arrayToSplit.length > 0) {
      const currentIndex = arrayToSplit.length - 1;
      if (arrayToSplit[currentIndex] === delimiter) {
        if (countItemBelongingTogether === 0) {
          // Two adjacent delimiters or array begins with delimiter
          arrayToSplit.pop();
        } else {
          // There are items, wich should be separated into arrays
          separatedArray.push(
            arrayWithTogetherBelongingItems
              .splice(0, arrayWithTogetherBelongingItems.length)
              .reverse()
          );
          countItemBelongingTogether = 0;
        }
      } else {
        countItemBelongingTogether++;
        arrayWithTogetherBelongingItems.push(arrayToSplit.pop()!);
        if (arrayToSplit.length === 0) {
          separatedArray.push(
            arrayWithTogetherBelongingItems
              .splice(0, arrayWithTogetherBelongingItems.length)
              .reverse()
          );
        }
      }
    }
    return Array.from(separatedArray.reverse());
  }
}
