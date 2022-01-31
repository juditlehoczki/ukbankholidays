import React from "react";
import { render, waitFor } from "react-native-testing-library";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Home from "../../src/screens/Home";
import mockData from "../mockData";
import inset from "../inset";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

const mockNavigation = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigation,
  }),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);

const mockStore = configureStore([]);
const store = mockStore({ bankHolidays: null });

describe("Home Screen", () => {
  test("loader renders correctly", () => {
    const component = render(
      <Provider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <Home />
        </NativeBaseProvider>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
  test("renders correctly", async () => {
    const component = await render(
      <Provider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <Home />
        </NativeBaseProvider>
      </Provider>
    );
    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });
});
