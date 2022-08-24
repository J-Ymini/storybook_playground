import Input from ".";
import STORIES_NAME from "../STORIES_NAME";

export default {
  title: `${STORIES_NAME.FORM}/Input`,
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
Small.storyName = "Small Input"; // stories title config 가능

export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;
