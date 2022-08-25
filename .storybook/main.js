module.exports = {
  // The main configuration file is main.js. This file controls the Storybook server's behavior, so you must restart Storybook’s process when you change it. It contains the following:
  // 변경시 storybook 재시작 필요

  // stories: 스토리파일 위치 경로
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    // "@storybook/addon-links",

    // // 필수 스토리북 애드온즈(Docs, Controls, Actions, Viewport, Backgrounds, Toolbars & globals, Measure & outline)
    // "@storybook/addon-essentials",

    ////storybook test
    // "@storybook/addon-interactions",
    // "@storybook/preset-create-react-app",

    // 하단 Actions 탭에서 해당 컴포넌트의 이벤트 확인
    "@storybook/addon-actions",

    // Canvas 옆에 생기는 Docs tab
    "@storybook/addon-docs",

    // props를 컨트롤하여 직접 코드르 변경하지 않고 해당 컴포넌트의 형태를 바꿔볼 수 있는 기능, v6로 업데이트되면서 controls라는 기본 기능이 추가됨
    "@storybook/addon-knobs",

    // 뷰포트 크기에 따라 스토리가 어떻게 렌더가 되는지 확인
    "@storybook/addon-viewport",

    // 웹 접근성 체크
    "@storybook/addon-a11y",
  ],
  // framework specific configurations to help the loading and building process.
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
