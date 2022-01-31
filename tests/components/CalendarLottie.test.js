import React from "react";
import { render } from "react-native-testing-library";
import { NativeBaseProvider } from "native-base";

import CalendarLottie from "../../src/components/CalendarLottie";
import inset from "../inset";

describe("CalendarLottie Component", () => {
  test("renders correctly", () => {
    const component = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <CalendarLottie />
      </NativeBaseProvider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
