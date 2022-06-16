// src/components/App.tsx
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import Packages from "./Packages";

const App: FC = () => (
  <Provider store={store}>
    <Packages />
  </Provider>
);

export default App;