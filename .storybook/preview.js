import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { Styled, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import { withA11y } from '@storybook/addon-a11y'
/* https://github.com/storybookjs/storybook-addon-console/issues/27 */
import '@storybook/addon-console'
// import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import {
  INITIAL_VIEWPORTS
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport'

import theme from '../src/gatsby-plugin-theme-ui'
import { globalStyles } from '../src/utils'

// setConsoleOptions({
//   panelExclude: []
// });

addParameters({
  viewport: {
    viewports: {
      // ...customViewports,
      ...INITIAL_VIEWPORTS
      // or ...MINIMAL_VIEWPORTS,
    }
  }
})

// addParameters({
//   options: {
//     showRoots: true
//   }
// });

addDecorator(withA11y)

// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// Add theme-ui ThemeProvider as a default decorator
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Global
      styles={() => ({
        '@font-face': {
          fontFamily: 'Topaz',
          src: `local('Topaz'), url('/fonts/topaz.woff2') format('woff2')`,
          fontWeight: 400,
          fontStyle: 'normal'
        },
        body: {
          margin: 0
        }
      })}
    />
    <Styled.root>{story()}</Styled.root>
  </ThemeProvider>
))
