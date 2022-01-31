import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";

import store from "./src/store/store";
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
