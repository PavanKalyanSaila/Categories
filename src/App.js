import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import "./styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;
