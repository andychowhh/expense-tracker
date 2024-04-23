import moment from "moment";
import { getLastTwelveMonths } from "./index";

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
