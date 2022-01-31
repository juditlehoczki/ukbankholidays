import {
  SET_BANK_HOLIDAYS,
  UPDATE_BANK_HOLIDAY,
} from "../../src/store/constants";
import { setBankHolidays, updateBankHoliday } from "../../src/store/actions";

describe("actions", () => {
  it("setBankHolidays should create an action with SET_BANK_HOLIDAYS type and correct payload", () => {
    const payload = "test payload";
    const expectedAction = { type: SET_BANK_HOLIDAYS, payload };
    expect(setBankHolidays(payload)).toEqual(expectedAction);
  });
  it("setBankHolidays should create an action with UPDATE_BANK_HOLIDAY type and correct payload", () => {
    const payload = "test payload";
    const expectedAction = { type: UPDATE_BANK_HOLIDAY, payload };
    expect(updateBankHoliday(payload)).toEqual(expectedAction);
  });
});
