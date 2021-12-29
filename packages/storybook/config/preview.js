import React from 'react';
import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import theme from '@packages/theme';
import store from '@packages/store';
import Fonts from '@packages/components/Layout/Fonts';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  Story => (
    <ChakraProvider theme={theme} colorModeManager>
      <Provider store={store}>
        <Fonts />
        <Story />
      </Provider>
    </ChakraProvider>
  ),
];
