import {Primary as PrimaryButton} from "../Button/Button.stories";
import {Large as LargeInput} from "../Input/Input.stories";
import STORIES_NAME from "../STORIES_NAME";

export default {
  title: `${STORIES_NAME.FORM}/Subscription`
}

export const PrimarySubscription = () => <>
  <LargeInput/>
  <PrimaryButton/>
</>