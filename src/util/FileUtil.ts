import fs = require("fs");
import path = require("path");

export class FileUtil {
  getEntriesFromTextFileByNameAndFolder(
    filename: string,
    directoryPath: string
  ): Array<string> {
    const inputPath = path.resolve(directoryPath, filename);
    return fs.readFileSync(inputPath).toString().split("\n");
  }

  getEntriesFromInputNamedTextFile(directoryPath: string): Array<string> {
    const inputPath = path.resolve(directoryPath, "input.txt");
    return fs.readFileSync(inputPath).toString().split("\n");
  }
}
