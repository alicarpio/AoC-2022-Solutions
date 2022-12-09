import {expect, test} from "vitest";

import solution from "./PartOne";
import {getInput} from "../input";

test("Test with example input works", () => {
    const input = getInput('04')
    expect(solution(input)).toBe(478)
})