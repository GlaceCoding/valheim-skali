module.exports = {
  stories: ['../../../packages/storybook/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@chakra-ui/storybook-addon',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  staticDirs: ['../../../public'],
};
