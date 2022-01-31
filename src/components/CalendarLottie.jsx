import React, { createRef, useEffect } from "react";
import { Center } from "native-base";
import LottieView from "lottie-react-native";

import calendar from "../../assets/calendar2-lottie.json";

const CalendarLottie = () => {
  const animation = createRef();

  useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <Center>
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 200,
          height: 200,
        }}
        source={calendar}
      />
    </Center>
  );
};

export default CalendarLottie;
