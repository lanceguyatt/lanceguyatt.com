import React from 'react'
import PropTypes from 'prop-types'

import { Drawer, File } from '../index'
import { Wrapper } from './style'

const Directory = ({ basepath, list, ...props }) => (
  <Wrapper is="nav" {...props}>
    {list.map(item => (
      <React.Fragment key={item.id}>
        {item.slug ? (
          <Drawer name={item.name} to={`${basepath}/${item.slug}`} />
        ) : (
          <File name={item.name} href={item.url} />
        )}
      </React.Fragment>
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
