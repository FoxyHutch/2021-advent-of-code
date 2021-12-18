import { SnailfishHomeworkHelper } from "./SnailfishHomeworkHelper";
import { AoCUtil } from "../util/AoCUtil";
const testData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
	"testData.txt",
	__dirname
);

let underTest: SnailfishHomeworkHelper;

beforeEach(() => {
	underTest = new SnailfishHomeworkHelper(testData);
});

describe("SnailfishHomeworkHelper", () => {
	// describe("subtractLeastFromMostCommonElementQuantity", () => {
	//   it("should return 1588", () => {
	//     const polymer = underTest.calcPolymerForSteps(
	//       10,
	//       underTest.polymerTemplate,
	//       underTest.insertionRules
	//     );
	//     expect(underTest.subtractLeastFromMostCommonElementQuantity(polymer)).toBe(1588);
	//   });
	// });
});
