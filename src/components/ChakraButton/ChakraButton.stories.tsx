import { Button } from "@chakra-ui/react";
import STORIES_NAME from "../STORIES_NAME";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { action, actions } from "@storybook/addon-actions";

import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: `${STORIES_NAME.FORM}/ChakraButton`,
  component: Button,
  args: {
    children: "default",
  },
  argTypes: {
    colorScheme: {
      options: ["red", "blue", "yellow", "purple"],
      control: { type: "radio" },
    },
    children: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof Button>;

export const Success = () => (
  <Button colorScheme="green" onClick={action("Click")}>
    Success
  </Button>
);
export const Danger = () => (
  <Button colorScheme="red" {...actions("onClick", "onMouseOver")}>
    Danger
  </Button>
);

export const Log = () => (
  <Button
    colorScheme="red"
    onClick={() => {
      console.log("Button clicked");
      console.log("used in release check");
    }}
  >
    Danger
  </Button>
);

export const Knobs = () => (
  <Button disabled={boolean("Disabled", false)} colorScheme="purple">
    {text("Knobs", "Button Knobs2")}
  </Button>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  colorScheme: "yellow",
  textColor: "white",
  children: "Button",
};
