import type { Preview } from '@storybook/react'
import '../src/app/globals.css'

import { withTests } from '@storybook/addon-jest'

import results from '../.jest-test-results.json'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTests({ results })],
}

export default preview
