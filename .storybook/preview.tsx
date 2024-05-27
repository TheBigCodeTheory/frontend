import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import * as React from "react";
import { inter, ubuntu } from '../src/app/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTests({ results }), (Story) => (
    <div className={`${inter.variable} ${ubuntu.variable}`}>
      <Story />
    </div>
  ),],
};

export default preview;
