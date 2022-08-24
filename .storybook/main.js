module.exports = {
  // The main configuration file is main.js. This file controls the Storybook server's behavior, so you must restart Storybook’s process when you change it. It contains the following:
  // 변경시 storybook 재시작 필요

  // stories: 스토리파일 위치 경로
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  // framework specific configurations to help the loading and building process.
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
