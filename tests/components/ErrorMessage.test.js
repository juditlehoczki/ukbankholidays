import React from "react";
import { cleanup, fireEvent, render } from "react-native-testing-library";
import { NativeBaseProvider } from "native-base";

import ErrorMessage from "../../src/components/ErrorMessage";
import inset from "../inset";

describe("ErrorMessage Component", () => {
  let props;
  beforeEach(() => {
    props = {
      onPress: jest.fn(),
      errorMessage: "Test Error Message",
    };
  });
  afterEach(cleanup);

  test("renders correctly", () => {
    const component = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ErrorMessage {...props} />
      </NativeBaseProvider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
  test("button calls passed in onPress function", async () => {
    const component = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ErrorMessage {...props} />
      </NativeBaseProvider>
    );
    const ButtonNode = await component.getByText("Try again");
    fireEvent.press(ButtonNode);
    expect(props.onPress).toHaveBeenCalled();
  });
});
