import { suite } from "@vangware/test";
import { stringMatches } from "../../src/string/stringMatches";

const onlyHasNumbers = stringMatches(/\d/gu);

export default suite([
	{
		given: "a string with numbers and a number validation",
		must: "return array with all numbers matching",
		received: onlyHasNumbers("1234"),
		wanted: ["1", "2", "3", "4"],
	},
	{
		given: "a string with letters and a number validation",
		must: "return empty match array",
		received: onlyHasNumbers("nope"),
		wanted: [],
	},
]);
