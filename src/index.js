import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(false);
  const wrapperStyle = {
    background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setDarkTheme(true)}
      >
        Dark Theme
      </button>

      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setDarkTheme(false)}
      >
        Default Theme
      </button>
      <div style={wrapperStyle}>
        <SignUpModal />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
