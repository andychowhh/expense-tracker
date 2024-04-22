import { getYearMonthRangetoday } from "./index";

describe("getYearMonthRangetoday", () => {
  test("a random date", () => {
    const today1 = new Date("2024-04-21");
    expect(getYearMonthRangetoday(today1)).toEqual(["2023-05", "2024-04"]);
  });

  test("another random date", () => {
    const today1 = new Date("2024-09-03");
    expect(getYearMonthRangetoday(today1)).toEqual(["2023-10", "2024-09"]);
  });

  test("first date of a year", () => {
    const lastDateOfYear = new Date("2024-01-02");
    expect(getYearMonthRangetoday(lastDateOfYear)).toEqual([
      "2023-02",
      "2024-01",
    ]);
  });

  test("last date of a year", () => {
    const lastDateOfYear = new Date("2024-12-31");
    expect(getYearMonthRangetoday(lastDateOfYear)).toEqual([
      "2024-01",
      "2024-1234",
    ]);
  });
});
