import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { Menu } from '../index'
import { Name, Wrapper } from './style'

class TitleBarTemplate extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          copyrightYear: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  }

  state = {
    menu: false,
  }

  openMenu = () => {
    this.setState({ menu: true })
  }

  closeMenu = () => {
    this.setState({ menu: false })
  }

  render() {
    const { data } = this.props
    const { site } = data
    const { siteMetadata } = site
    const { menu } = this.state
    return (
      <Wrapper
        menu={menu}
        onMouseEnter={this.openMenu}
        onMouseLeave={this.closeMenu}
      >
        <Name display={!menu ? 'block' : 'none'}>
          {siteMetadata.title}. Copyright © 2000-{siteMetadata.copyrightYear}{' '}
          All Rights Reserved
        </Name>
        <Menu
          position="absolute"
          top={0}
          left={3}
          zIndex={4}
          display={menu ? 'block' : 'none'}
        />
      </Wrapper>
    )
  }
}

const TitleBar = () => (
  <StaticQuery
    query={TitleBarQuery}
    render={data => <TitleBarTemplate data={data} />}
  />
)

export default TitleBar

const TitleBarQuery = graphql`
  query titleBarQuery {
    site {
      siteMetadata {
        title
        copyrightYear
      }
    }
  }
`
