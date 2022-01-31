import React, { useEffect, useState } from "react";
import { Box, Button, Center, HStack, ScrollView, Skeleton } from "native-base";
import { connect } from "react-redux";

import BankHolidayCard from "../components/BankHolidayCard";
import CalendarLottie from "../components/CalendarLottie";
import ErrorMessage from "../components/ErrorMessage";
import { setBankHolidays } from "../store/actions";
import { formatBankHolidays, convertKebabToTitle } from "../utils/utils";

const Home = ({ setBankHolidays, bankHolidays }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [regions, setRegions] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://www.gov.uk/bank-holidays.json");
      const responseJson = await response.json();
      const formattedBankHolidays = formatBankHolidays(responseJson);
      const convertedRegions = Object.keys(formattedBankHolidays);
      setRegions(convertedRegions);
      setSelectedRegion(convertedRegions[0]);
      setBankHolidays(formattedBankHolidays);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Ooops, something went wrong.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <CalendarLottie />
      <Box flex={1}>
        {isLoading ? (
          <Center>
            <Box w="5/6">
              <Skeleton.Text px="4" lines={5} />
            </Box>
          </Center>
        ) : (
          <Box w="5/6" alignSelf="center">
            {regions && (
              <HStack space={1} justifyContent="center" mb={5}>
                {regions.map((region) => (
                  <Button
                    key={region}
                    w="1/3"
                    rounded="lg"
                    bg="orange.300"
                    onPress={() => {
                      setSelectedRegion(region);
                    }}
                  >
                    {convertKebabToTitle(region)}
                  </Button>
                ))}
              </HStack>
            )}
            {bankHolidays &&
              selectedRegion &&
              bankHolidays[selectedRegion].map((item) => (
                <BankHolidayCard item={item} key={item.date + item.title} />
              ))}
          </Box>
        )}
        {errorMessage && (
          <ErrorMessage onPress={fetchData} errorMessage={errorMessage} />
        )}
      </Box>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  bankHolidays: state.bankHolidays,
});

const mapDispatchToProps = { setBankHolidays };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
