import { Button } from "@chakra-ui/react";
import STORIES_NAME from "../STORIES_NAME";

import { ComponentMeta, ComponentStory } from "@storybook/react";

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

export const Success = () => <Button colorScheme="green">Success</Button>;
export const Danger = () => <Button colorScheme="red">Danger</Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  colorScheme: "yellow",
  textColor: "white",
  children: "Button",
};
