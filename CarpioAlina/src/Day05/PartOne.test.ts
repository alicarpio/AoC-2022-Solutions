import {expect, test} from "vitest";

import solution from "./PartOne";


test("Test with example input works", () => {
    const input = ``
    expect(solution(input)).toBe(478)
})