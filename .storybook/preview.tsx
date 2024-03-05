import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import RecoilRootProvider from '../src/app/RecoilRootProvider';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RecoilRootProvider>
        <Story />
      </RecoilRootProvider>
    ),
  ],
};

export default preview;
