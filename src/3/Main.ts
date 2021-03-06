import { DiagnosticReportService } from "./DiagnosticReportService";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";

class Main {
	constructor() {
		const service = new DiagnosticReportService(
			new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname)
		);

		console.log(
			new ConsoleTextUtil().formatSolutionText(
				3,
				"Calculate Powerconsumption",
				service.calculatePowerConsumption().toString(),
				"Calculate Life Support Rating",
				service.calculateLifeSupportRating().toString()
			)
		);
	}
}

new Main();
