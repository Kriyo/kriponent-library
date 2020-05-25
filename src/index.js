import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { PrimaryButton, SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const wrapperStyle = {
    background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  const currentTheme = useDarkTheme ? "Dark" : "Normal";
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <PrimaryButton onClick={() => setDarkTheme(!useDarkTheme)}>Toggle Theme</PrimaryButton>
      <PrimaryButton onClick={() => setShowModal(!showModal)}>Toggle Modal</PrimaryButton>
      <p>Current Theme: {currentTheme}</p>

      <div style={wrapperStyle}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
