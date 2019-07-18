import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
// import Img from 'gatsby-image'

import Basic from '../layouts/Basic'
// import { Work } from '../containers'
import { Box } from '../primitives'
import { SEO, Window, Dl, Dt, Dd, Action, Qux } from '../components'
const components = {
  Action,
}

const DocTemplate = props => {
  const { data } = props
  const { mdx } = data
  const { frontmatter, code } = mdx
  const { name } = frontmatter
  return (
    <Basic>
      <Box bg="secondary" p={4}>
        <h1>{name}</h1>
        {code.body && (
          <MDXProvider components={components}>
            <MDXRenderer>{code.body}</MDXRenderer>
          </MDXProvider>
        )}
      </Box>
    </Basic>
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
