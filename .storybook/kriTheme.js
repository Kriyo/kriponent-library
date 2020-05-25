import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#2E4052",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 0,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#F6F7EB",
  barSelectedColor: "#FFFC31",
  barBg: "#2E4052",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placedog.net/350",
});
