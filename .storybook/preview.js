import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgrounds: [
    { name: "Default Theme", value: "#FFF", default: true },
    { name: "Dark Theme", value: "#2E4052" },
  ],
});

addDecorator(withContexts(contexts));
