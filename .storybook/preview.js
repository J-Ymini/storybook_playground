// The preview.js configuration file allows users to control how the story renders in the UI. (스토리북 UI 내에서의 config 설정)

import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import { addDecorator, addParameters } from "@storybook/react";
import Center from "../src/components/Center";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  // viewport config
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

// before storybook v6
// addDecorator((Story) => (
//   <ThemeProvider theme={theme}>
//     <CSSReset />
//     <Box m="4">{Story()}</Box>
//   </ThemeProvider>
// ));

// after storybook v6
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">{Story()}</Box>
    </ThemeProvider>
  ),
];

// addon console description
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// addon knobs
addDecorator(withKnobs);
