import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Box } from '../../primitives'
import Drawer from '../Drawer'
import File from '../File'
import { Foo, Wrapper } from './style'

const Name = () => <Box>Name</Box>

const Date = props => {
  const { list, basepath } = props
  return (
    <Box flex="none">
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Permissions</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
        {list.map(item => (
          <tr key={item.id}>
            <td>
              <Link to={`${basepath}/${item.slug}`}>{item.name}</Link>
            </td>
            <td>0</td>
            <td>----rwe</td>
            <td>21-May-2019</td>
            <td>15:43:16</td>
          </tr>
        ))}
      </table>
    </Box>
  )
}

Date.propTypes = {
  list: PropTypes.shape().isRequired,
  basepath: PropTypes.string,
}

Date.defaultProps = {
  basepath: null,
}

const Size = () => <Box>Size</Box>

const Icon = props => {
  const { list, basepath } = props
  return (
    <Foo is="nav" {...props}>
      {list.map(item => (
        <Fragment key={item.id}>
          {item.slug ? (
            <Drawer
              heading="h2"
              name={item.name}
              to={`${basepath}/${item.slug}`}
            />
          ) : (
            <File name={item.name} href={item.url} />
          )}
        </Fragment>
      ))}
    </Foo>
  )
}

Icon.propTypes = {
  list: PropTypes.array.isRequired,
  basepath: PropTypes.string,
}

Icon.defaultProps = {
  basepath: null,
}

class Directory extends Component {
  renderView = view => {
    if (view === 'name') {
      return <Name {...this.props} />
    }

    if (view === 'date') {
      return <Date {...this.props} />
    }

    if (view === 'size') {
      return <Size {...this.props} />
    }

    if (view === 'icon') {
      return <Icon {...this.props} />
    }

    return <Icon {...this.props} />
  }

  render() {
    const { view } = this.props
    return <Wrapper>{this.renderView(view)}</Wrapper>
  }
}

Directory.propTypes = {
  // basepath: PropTypes.string,
  view: PropTypes.oneOf(['name', 'date', 'size', 'icon']),
  // list: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

Directory.defaultProps = {
  // basepath: null,
  view: 'icon',
}

export default Directory
