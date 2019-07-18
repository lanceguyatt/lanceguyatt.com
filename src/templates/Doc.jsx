import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'

import Doc from '../layouts/Doc'
import { Box } from '../primitives'
import { Action } from '../components'

const components = {
  Action,
}

const DocTemplate = props => {
  const { data } = props
  const { mdx } = data
  const { frontmatter, code } = mdx
  const { name } = frontmatter
  return (
    <Doc>
      <Box bg="secondary" p={4}>
        <h1>{name}</h1>
        {code.body && (
          <MDXProvider components={components}>
            <MDXRenderer>{code.body}</MDXRenderer>
          </MDXProvider>
        )}
      </Box>
    </Doc>
  )
}

DocTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default DocTemplate

export const DocQuery = graphql`
  query docQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        slug
      }
      code {
        body
      }
    }
  }
`
