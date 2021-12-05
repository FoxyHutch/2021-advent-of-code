import { WinnerLoser } from "./types";
import { AoCUtil } from "./../util/AoCUtil";
import { BingoBoard } from "./BingoBoard";
export class BingoGame {
  BOARD_INSTRUCTIONS_STARTINDEX = 1;

  bingoInstructions: Array<number>;
  bingoBoards: Array<BingoBoard>;

  constructor(entries: Array<string>) {
    this.bingoInstructions = this.extractBingoInstructions(entries);
    this.bingoBoards = this.extractBingoBoards(entries);
  }

  playGame(boardToFind: WinnerLoser): number {
    const score = boardToFind === WinnerLoser.WINNER ? this.findWinner() : this.findLoser();
    return score;
  }

  findLoser(): number {
    const winnerHistory: Array<{
      boardIndex: number;
      score: number;
    }> = [];
    for (const draw of this.bingoInstructions) {
      for (let index = 0; index < this.bingoBoards.length; index++) {
        const board = this.bingoBoards[index];
        const reply = board.markFields(draw);
        if (reply) {
          if (!winnerHistory.find((wh) => wh.boardIndex === index)) {
            winnerHistory.push({ boardIndex: index, score: reply });
          }
          if (winnerHistory.length === this.bingoBoards.length) {
            break;
          }
        }
      }
    }
    return winnerHistory[winnerHistory.length - 1].score;
  }

  findWinner(): number {
    let score = 0;
    for (const draw of this.bingoInstructions) {
      for (const board of this.bingoBoards) {
        const reply = board.markFields(draw);
        if (reply) {
          score = reply;
          break;
        }
      }
      if (score != 0) {
        break;
      }
    }
    return score;
  }

  extractBingoInstructions(input: Array<string>): Array<number> {
    const instructionString = input[0];
    const instructions = Array.from(instructionString.split(",").map(Number));
    return instructions;
  }

  extractBingoBoards(input: Array<string>): Array<BingoBoard> {
    const boardArray: Array<BingoBoard> = [];

    const arrayWithInstructionsAndBoard = new AoCUtil().separateArrayOfStringByDelimiter(input, "");

    for (
      let index = this.BOARD_INSTRUCTIONS_STARTINDEX;
      index < arrayWithInstructionsAndBoard.length;
      index++
    ) {
      const element = arrayWithInstructionsAndBoard[index];
      boardArray.push(new BingoBoard(element));
    }

    return boardArray;
  }
}
