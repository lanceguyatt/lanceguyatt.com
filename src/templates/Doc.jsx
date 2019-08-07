import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

<<<<<<< HEAD
import Doc from '../layouts/Doc'
=======
import Basic from '../layouts/Basic'
>>>>>>> bugs/general
import { Box } from '../primitives'
import { Action } from '../components'

const components = {
  Action,
}

const DocTemplate = props => {
  const { data } = props
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { name } = frontmatter
  return (
    <Doc>
      <Box bg="secondary" p={4}>
        <h1>{name}</h1>
        {body && (
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
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
      body
    }
  }
`
