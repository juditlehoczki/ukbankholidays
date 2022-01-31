import {
  formatBankHolidays,
  convertKebabToTitle,
  formatDate,
} from "../../src/utils/utils";
import mockData from "../mockData";

Date.now = jest.fn(() => new Date(2022, 0, 30));

describe("formatBankHolidays", () => {
  test("returns bank holidays in the expected format", () => {
    const actualResult = formatBankHolidays(mockData);
    expect(actualResult).toMatchSnapshot();
  });
  test("returns max 5 bank holidays", () => {
    const actualResult = formatBankHolidays(mockData);
    for (const region in actualResult) {
      expect(actualResult[region].length).toBeLessThanOrEqual(5);
    }
  });
});

describe("convertKebabToTitle", () => {
  test("converts kebab case to title case", () => {
    expect(convertKebabToTitle("england-and-wales")).toBe("England And Wales");
  });
});

describe("formatDate", () => {
  test("formats date string correctly", () => {
    expect(formatDate("2022-01-29")).toBe("29 January 2022");
  });
});
