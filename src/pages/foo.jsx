import React from 'react'
import { Box } from '@theme-ui/components'
import { Styled } from 'theme-ui'
import { Global } from '@emotion/core'
import { Link } from 'gatsby'

import Button from '../components/Button'
import { Alert } from '../components'

export default function Foo() {
  return (
    <>
      <Global
        styles={() => ({
          '@font-face': {
            fontFamily: 'Topaz',
            src: `local('Topaz'),
                 url('/fonts/topaz.eot?#iefix') format('embedded-opentype'),
                 url('/fonts/topaz.woff') format('woff'),
                 url('/fonts/topaz.woff2') format('woff2')`,
            fontWeight: 400,
            fontStyle: 'normal'
          }
        })}
      />
      <Styled.root>
        <Box p={4}>
          <Alert>Alert</Alert>
          <Button as={Link} to="/work/novagraaf" external>
            Foo
          </Button>
          <Button disabled>Foo</Button>
        </Box>
      </Styled.root>
    </>
  )
}
