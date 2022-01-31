import { add, format, isBefore, parseISO } from "date-fns";

const isWithinSixMonths = (dateString) => {
  const today = new Date();
  const sixMonthsFromNowDate = add(today, { months: 6 });
  const dateToCompare = parseISO(dateString);

  return (
    !isBefore(dateToCompare, today) &&
    isBefore(dateToCompare, sixMonthsFromNowDate)
  );
};

export const formatBankHolidays = (bankHolidaysData) => {
  const formattedBankHolidays = {};
  for (const region in bankHolidaysData) {
    const filteredEvents = bankHolidaysData[region].events
      .filter((bankHoliday) => isWithinSixMonths(bankHoliday.date))
      .slice(0, 5);
    formattedBankHolidays[region] = filteredEvents;
  }

  return formattedBankHolidays;
};

export const convertKebabToTitle = (text) => {
  const words = text.split("-");
  const capitalised = words.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  );
  return capitalised.join(" ");
};

export const formatDate = (dateString) => {
  return format(parseISO(dateString), "d MMMM yyyy");
};
