import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import { NativeBaseProvider } from "native-base";

import BankHolidayCard from "../../src/components/BankHolidayCard";
import inset from "../inset";

const mockNavigation = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigation,
  }),
}));

describe("BankHolidayCard Component", () => {
  let props;
  beforeEach(() => {
    props = {
      item: {
        title: "Test Title",
        date: "2022-01-30",
        notes: "Test Notes",
        bunting: false,
      },
    };
  });

  test("renders correctly", () => {
    const component = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <BankHolidayCard {...props} />
      </NativeBaseProvider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
  test("Edit icon navigates to Edit screen with item", async () => {
    const component = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <BankHolidayCard {...props} />
      </NativeBaseProvider>
    );
    const IconButtonNode = await component.getByA11yRole("button");
    fireEvent.press(IconButtonNode);
    expect(mockNavigation).toHaveBeenCalledWith("Edit", {
      bankHoliday: props.item,
    });
  });
});
