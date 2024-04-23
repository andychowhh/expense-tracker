import moment from "moment";
import { getLastTwelveMonths, getYearMonthRangeForLastYear } from "./index";

describe("getYearMonthRangetoday", () => {
  test("a random date", () => {
    const today1 = new Date("2024-04-21");
    expect(getYearMonthRangeForLastYear(today1)).toEqual([
      "2023-05",
      "2024-04",
    ]);
  });

  test("another random date", () => {
    const today1 = new Date("2024-09-03");
    expect(getYearMonthRangeForLastYear(today1)).toEqual([
      "2023-10",
      "2024-09",
    ]);
  });

  test("first date of a year", () => {
    const lastDateOfYear = new Date("2024-01-02");
    expect(getYearMonthRangeForLastYear(lastDateOfYear)).toEqual([
      "2023-02",
      "2024-01",
    ]);
  });

  test("last date of a year", () => {
    const lastDateOfYear = new Date("2024-12-31");
    expect(getYearMonthRangetoday(lastDateOfYear)).toEqual([
      "2024-01",
      "2024-12",
    ]);
  });
});

describe("getLastTwelveMonths", () => {
  test("a random date", () => {
    const today = moment("2024-04-22");
    expect(getLastTwelveMonths(today)).toEqual([
      "2023-05",
      "2023-06",
      "2023-07",
      "2023-08",
      "2023-09",
      "2023-10",
      "2023-11",
      "2023-12",
      "2024-01",
      "2024-02",
      "2024-03",
      "2024-04",
    ]);
  });
});
