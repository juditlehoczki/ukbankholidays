import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  Heading,
  KeyboardAvoidingView,
  Stack,
  TextArea,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import * as actions from "../store/actions";
import { formatDate } from "../utils/utils";

const Edit = ({
  updateBankHoliday,
  route: {
    params: { bankHoliday },
  },
}) => {
  const { goBack } = useNavigation();
  const [notes, setNotes] = useState(bankHoliday.notes);
  const [bunting, setBunting] = useState(bankHoliday.bunting);

  const handleSave = () => {
    const { title, date } = bankHoliday;
    updateBankHoliday({ title, date, notes, bunting });
    goBack();
  };

  return (
    <KeyboardAvoidingView>
      <Stack w="5/6" alignSelf="center" alignItems="center" space={2} mt={5}>
        <Heading textAlign="center" size="md">
          {bankHoliday.title}
        </Heading>
        <Heading textAlign="center" size="lg">
          {formatDate(bankHoliday.date)}
        </Heading>
        <FormControl>
          <FormControl.Label>Notes</FormControl.Label>
          <TextArea
            h={200}
            value={notes}
            placeholder="Notes"
            onChangeText={setNotes}
          />
        </FormControl>
        <FormControl>
          <Checkbox
            defaultIsChecked={bunting}
            colorScheme="orange"
            onChange={setBunting}
          >
            Bunting
          </Checkbox>
        </FormControl>
        <Button w="1/3" rounded="lg" bg="orange.300" onPress={handleSave}>
          Save
        </Button>
      </Stack>
    </KeyboardAvoidingView>
  );
};

const mapDispatchToProps = { updateBankHoliday: actions.updateBankHoliday };

export default connect(null, mapDispatchToProps)(Edit);
