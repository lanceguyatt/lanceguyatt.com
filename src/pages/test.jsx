import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Box, Flex } from '../primitives'
import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'
import { SEO, Window, TitleBar, Cycle } from '../components'

const Wrapper = styled(Box).attrs({
  minHeight: 'content-min',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})``

const Test = () => (
  <ThemeProvider theme={workbench}>
    <>
      <GlobalStyle />
      <SEO name="Test" />
      <Wrapper>
        <TitleBar position="fixed" top={0} left={0} right={0} />
        <Flex
          flexWrap="wrap"
          flex="auto"
          flexDirection={['column', 'row']}
          position="absolute"
          top="2.2rem"
          right={0}
          bottom={0}
          left={0}
        >
          <Window border={3} name="Test" active flex={1}>
            <Cycle />
          </Window>
          <Window name="Test" flex={1} />
          <Window name="Test" flex={1} />
          <Window name="Test" flex={1} />
        </Flex>
      </Wrapper>
    </>
  </ThemeProvider>
)

export default Test
