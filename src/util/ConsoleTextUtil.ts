export class ConsoleTextUtil {
	formatSolutionText(
		dayOfAoC: number,
		firstDescription: string,
		firstSolution: string,
		secondDescription?: string,
		secondSolution?: string
	) {
		return `
## DAY ${dayOfAoC}
-- PART 1/2 -- 
${firstDescription}
Solution: ${firstSolution}

-- PART 2/2 --
${secondDescription ?? "NOT SOLVED YET"}
Solution: ${secondSolution ?? "???"}`;
	}
}
