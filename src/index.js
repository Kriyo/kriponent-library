import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const tempMargin = { margin: "15px" };
const App = () => (
  <div>
    <div style={tempMargin}>
      <PrimaryButton modifiers={["small", "success"]}>Primary Button</PrimaryButton>
    </div>
    <div style={tempMargin}>
      <SecondaryButton modifiers={["large", "warningSecondary"]}>Secondary Button</SecondaryButton>
    </div>
    <div style={tempMargin}>
      <TertiaryButton modifiers={["error"]}>Tertiary Button</TertiaryButton>
    </div>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
