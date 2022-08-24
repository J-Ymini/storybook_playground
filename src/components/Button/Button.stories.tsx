import STORIES_NAME from "../STORIES_NAME";
import Button from "./index";
import Center from "../Center";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: `${STORIES_NAME.FORM}/Button`,
  component: Button,
  args: {
    children: "Button",
  },
  // 파일 내에서 부분적으로 데코레이터를 사용하고자 할 경우 선택
  // decorators: [(Story) => <Center>{Story()}</Center>],
} as ComponentMeta<typeof Button>;

const onClick = () => {
  console.log("hello world");
};

export const Primary = () => (
  <Button variant="primary" onClick={onClick}>
    Primary
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={onClick}>
    Secondary
  </Button>
);

export const Success = () => (
  <Button variant="success" onClick={onClick}>
    Success
  </Button>
);

export const Danger = () => (
  <Button variant="danger" onClick={onClick}>
    Danger
  </Button>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long primaryA",
};

export const DefaultArgumentSuccess = Template.bind({});
DefaultArgumentSuccess.args = {
  variant: "success",
};

export const DefaultArgumentDanger = Template.bind({});
DefaultArgumentDanger.args = {
  variant: "danger",
};
