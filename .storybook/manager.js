import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import kriTheme from "./kriTheme";

addons.setConfig({
  theme: kriTheme,
});
