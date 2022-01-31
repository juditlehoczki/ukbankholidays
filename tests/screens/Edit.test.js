import React from "react";
import { fireEvent, render, waitFor } from "react-native-testing-library";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Edit from "../../src/screens/Edit";
import inset from "../inset";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

const mockNavigation = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: mockNavigation,
  }),
}));

const mockStore = configureStore([]);
const store = mockStore({ bankHolidays: null });

describe("Edit Screen", () => {
  let props;
  beforeEach(() => {
    props = {
      updateBankHoliday: jest.fn(),
      route: {
        params: {
          bankHoliday: {
            title: "Test Title",
            date: "2022-01-30",
            notes: "Test Notes",
            bunting: false,
          },
        },
      },
    };
  });

  test("renders correctly", async () => {
    const component = render(
      <Provider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <Edit {...props} />
        </NativeBaseProvider>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    component.getByText("Test Title");
    component.getByText("30 January 2022");
    component.getByDisplayValue("Test Notes");
  });
  test("Notes input field changes state", async () => {
    const component = render(
      <Provider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <Edit {...props} />
        </NativeBaseProvider>
      </Provider>
    );
    const NotesInput = await component.getByDisplayValue("Test Notes");
    fireEvent.changeText(NotesInput, "Changed test notes");
    await component.getByDisplayValue("Changed test notes");
  });
  test("Navigates back after Save Button pressed", async () => {
    const component = render(
      <Provider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <Edit {...props} />
        </NativeBaseProvider>
      </Provider>
    );
    const SaveButton = await component.getByText("Save");
    fireEvent.press(SaveButton);
    expect(mockNavigation).toHaveBeenCalled();
  });
});
