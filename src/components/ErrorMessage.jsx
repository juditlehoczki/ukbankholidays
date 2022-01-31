import React from "react";
import { Center, Button, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const ErrorMessage = ({ onPress, errorMessage }) => {
  return (
    <Center>
      <Text>{errorMessage}</Text>
      <Button
        size="sm"
        colorScheme="light"
        rounded="lg"
        rightIcon={<MaterialIcons name="refresh" size={30} color="white" />}
        onPress={onPress}
      >
        Try again
      </Button>
    </Center>
  );
};

export default ErrorMessage;
