import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const tempMargin = { margin: "15px" };
const App = () => (
  <div>
    <div style={tempMargin}>
      <PrimaryButton>Primary Button</PrimaryButton>
    </div>
    <div style={tempMargin}>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </div>
    <div style={tempMargin}>
      <TertiaryButton>Tertiary Button</TertiaryButton>
    </div>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
