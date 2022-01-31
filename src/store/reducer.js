import { SET_BANK_HOLIDAYS, UPDATE_BANK_HOLIDAY } from "./constants";

const initialState = {
  bankHolidays: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANK_HOLIDAYS:
      return {
        ...state,
        bankHolidays: action.payload,
      };
    case UPDATE_BANK_HOLIDAY:
      let updatedBankHolidays = {};
      for (const region in state.bankHolidays) {
        const updated = state.bankHolidays[region].map((bankHoliday) => {
          if (bankHoliday.title === action.payload.title) {
            return {
              title: action.payload.title,
              date: action.payload.date,
              notes: action.payload.notes,
              bunting: action.payload.bunting,
            };
          } else {
            return bankHoliday;
          }
        });
        updatedBankHolidays[region] = updated;
      }
      return {
        ...state,
        bankHolidays: updatedBankHolidays,
      };
    default:
      return state;
  }
};

export default reducer;
