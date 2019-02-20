import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Drawer, File, Box, Flex } from './common'

/* eslint-disable-next-line */
const Wrapper = styled(({ basepath, list, ...props }) => (
  <Flex {...props} />
)).attrs({
  flexWrap: 'wrap',
})``

const Directory = ({ basepath, list, ...props }) => (
  <Wrapper is="nav" {...props}>
    {list.map(item => (
      <Box key={item.id}>
        {item.slug ? (
          <Drawer name={item.name} to={`${basepath}/${item.slug}`} />
        ) : (
          <File name={item.name} href={item.url} />
        )}
      </Box>
    ))}
  </Wrapper>
)

Directory.propTypes = {
  basepath: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

Directory.defaultProps = {
  basepath: null,
}

export default Directory
