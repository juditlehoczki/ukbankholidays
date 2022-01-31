import reducer from "../../src/store/reducer";
import {
  SET_BANK_HOLIDAYS,
  UPDATE_BANK_HOLIDAY,
} from "../../src/store/constants";

describe("reducer", () => {
  const payload = "test payload";

  test("reducer with SET_BANK_HOLIDAYS action changes state correctly", () => {
    const initialState = {
      bankHolidays: null,
    };
    const expectedState = {
      bankHolidays: payload,
    };
    const action = { type: SET_BANK_HOLIDAYS, payload };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  test("reducer with UPDATE_BANK_HOLIDAY action changes state correctly", () => {
    const initialState = {
      bankHolidays: {
        "england-and-wales": [
          {
            title: "Summer bank holiday",
            date: "2021-08-30",
            notes: "",
            bunting: true,
          },
          {
            title: "Christmas Day",
            date: "2021-12-27",
            notes: "Substitute day",
            bunting: true,
          },
          {
            title: "Boxing Day",
            date: "2021-12-28",
            notes: "Substitute day",
            bunting: true,
          },
        ],
      },
    };
    const expectedState = {
      bankHolidays: {
        "england-and-wales": [
          {
            title: "Summer bank holiday",
            date: "2021-08-30",
            notes: "Test Note",
            bunting: false,
          },
          {
            title: "Christmas Day",
            date: "2021-12-27",
            notes: "Substitute day",
            bunting: true,
          },
          {
            title: "Boxing Day",
            date: "2021-12-28",
            notes: "Substitute day",
            bunting: true,
          },
        ],
      },
    };
    const action = {
      type: UPDATE_BANK_HOLIDAY,
      payload: {
        title: "Summer bank holiday",
        date: "2021-08-30",
        notes: "Test Note",
        bunting: false,
      },
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  test("returns default state if unexpected action is passed", () => {
    const initialState = {
      bankHolidays: null,
    };
    const action = { type: "test", payload: "test" };
    expect(reducer(initialState, action)).toBe(initialState);
  });
});
