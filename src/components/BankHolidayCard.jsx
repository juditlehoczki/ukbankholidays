import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon, IconButton, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { formatDate } from "../utils/utils";

const BankHolidayCard = ({ item }) => {
  const { navigate } = useNavigation();
  const { bunting, title, date, notes } = item;

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      rounded="lg"
      shadow={8}
      p={2}
      m={2}
      bgColor="orange.100"
    >
      <VStack>
        <HStack>
          {bunting && <Text fontSize="lg">🇬🇧 </Text>}
          <Text fontSize="lg">{title}</Text>
        </HStack>
        <Text bold italic>
          {formatDate(date)}
        </Text>
        {!!notes && <Text fontSize="lg">🗒</Text>}
      </VStack>
      <IconButton
        icon={<Icon as={MaterialIcons} name="edit" />}
        borderRadius="full"
        _icon={{
          color: "orange.500",
          size: "sm",
        }}
        onPress={() => navigate("Edit", { bankHoliday: item })}
      />
    </HStack>
  );
};

export default BankHolidayCard;
