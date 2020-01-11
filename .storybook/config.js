import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { Styled, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'

import theme from '../src/gatsby-plugin-theme-ui'

addParameters({
  options: {
    showRoots: true,
  },
})

// Add theme-ui ThemeProvider as a default decorator
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Global
      styles={() => ({
        '@font-face': {
          fontFamily: 'Topaz',
          src: `local('Topaz'),
                 url('/fonts/topaz.eot?#iefix') format('embedded-opentype'),
                 url('/fonts/topaz.woff') format('woff'),
                 url('/fonts/topaz.woff2') format('woff2')`,
          fontWeight: 400,
          fontStyle: 'normal',
        },
      })}
    />
    <Styled.root>{story()}</Styled.root>
  </ThemeProvider>
))

// Automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.jsx$/),
  ],
  module
)
