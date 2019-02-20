import React from 'react'
import PropTypes from 'prop-types'

import { Image, Name, Link } from './style'

const Drawer = ({ name, to }) => (
  <Link to={to} activeClassName="active">
    <Image />
    <Name>{name}</Name>
  </Link>
)
Drawer.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Drawer
