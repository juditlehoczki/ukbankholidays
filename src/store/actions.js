import { SET_BANK_HOLIDAYS, UPDATE_BANK_HOLIDAY } from "./constants";

export const setBankHolidays = (bankHolidays) => ({
  type: SET_BANK_HOLIDAYS,
  payload: bankHolidays,
});

export const updateBankHoliday = (bankHoliday) => ({
  type: UPDATE_BANK_HOLIDAY,
  payload: bankHoliday,
});
