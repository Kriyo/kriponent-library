import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { contexts } from "./contexts";

addParameters({
  backgrounds: [
    { name: "Default Theme", value: "#FFF", default: true },
    { name: "Dark Theme", value: "#2E4052" },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
