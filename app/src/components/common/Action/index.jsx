import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { link } from './style'

const Button = styled.button`
  ${link};
`
const Internal = styled(Link)`
  ${link};
`

const External = styled.a`
  ${link};
`

const Action = ({ name, url, ...props }) => {
  if (!url) {
    return <Button {...props}>{name}</Button>
  }

  if (/^\/(?!\/)/.test(url)) {
    return (
      <Internal to={url} {...props}>
        {name}
      </Internal>
    )
  }

  return (
    <External href={url} target="_blank" rel="noreferrer noopener" {...props}>
      {name}
    </External>
  )
}

Action.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
}

Action.defaultProps = {
  name: 'Action name',
  url: null,
}

export default Action
