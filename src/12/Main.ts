import { PathFinder } from "./PathFinder";
import { ConsoleTextUtil } from "./../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
class Main {
	constructor() {
		const data = new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname);
		const smallestTestData = new AoCUtil().getEntriesAsStringsFromTextFileByNameAndFolder(
			"smallestTestData.txt",
			__dirname
		);
		const pathFinder = new PathFinder(data);

		console.log(
			new ConsoleTextUtil().formatSolutionText(
				12,
				"Calculate amount of paths",
				pathFinder.calculateNumberOfPaths(pathFinder.PATH_START_STRING, [], false).toString(),
				"Calculate amount of paths with visiting small cave twice",
				pathFinder.calculateNumberOfPaths(pathFinder.PATH_START_STRING, [], true).toString()
			)
		);
	}
}

new Main();
