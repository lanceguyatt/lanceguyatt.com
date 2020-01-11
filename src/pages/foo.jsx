import React from 'react'
import { Box } from '@theme-ui/components'
import { ThemeProvider, Styled } from 'theme-ui'
import { Global } from '@emotion/core'

import theme from '../themes/default'
import Button from '../components/Button'

export default function Foo() {
  return (
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
      <Styled.root>
        <Box p={4}>
          <Button>Foo</Button>
          <Button disabled>Foo</Button>
        </Box>
      </Styled.root>
    </ThemeProvider>
  )
}
