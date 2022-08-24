import { Button } from "@chakra-ui/react";
import STORIES_NAME from "../STORIES_NAME";

import { ComponentMeta } from "@storybook/react";

export default {
  title: `${STORIES_NAME.FORM}/ChakraButton`,
  component: Button,
} as ComponentMeta<typeof Button>;

export const Success = () => <Button colorScheme="green">Success</Button>;
export const Danger = () => <Button colorScheme="red">Danger</Button>;
