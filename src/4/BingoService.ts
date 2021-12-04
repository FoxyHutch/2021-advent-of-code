import { BinarySearchResult } from "./types";
export class BingoService {
  diagnosticReport: Array<string>;

  constructor(entries: Array<string>) {
    this.diagnosticReport = entries;
  }
}
