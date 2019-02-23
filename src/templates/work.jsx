import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import WorkBench from '../layouts/WorkBench'
import { WorkBench as WB, Work } from '../containers'
import { SEO, Window } from '../components'
import { Box, Flex, Action } from '../components/common'

const Foo = styled(Box).attrs({
  border: 4,
  p: 2,
})`
  border-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==)
    4 stretch;

  .gatsby-image-wrapper {
    display: block !important;
  }
`

const Dl = styled(Flex).attrs({
  is: 'dl',
  flexDirection: ['column', 'row'],
  width: 1,
  mb: 4,
  lineHeight: 0,
})``

const Dt = styled(Box).attrs({
  is: 'dt',
  color: 'light',
  flex: 1,
  mr: [null, 4],
  mb: 3,
  pt: 3,
})`
  &::after {
    content: ':';
  }
`

const Dd = styled(Foo).attrs({
  is: 'dd',
  flex: 2,
})``

const WorkTemplate = ({ data }) => {
  const { strapiWork } = data
  const { name, description, slug, url, image, logo, technologies } = strapiWork
  return (
    <WorkBench>
      <>
        <SEO
          name={name}
          description={description}
          url={`/work/${slug}`}
          image={image ? image.childImageSharp.fixed.src : null}
          website
          node={strapiWork}
        />
        <WB />
        <Work />
        <Window {...strapiWork} close="/work" active level2>
          <Flex
            flexDirection="column"
            height="calc(100% - 2.2rem)"
            minHeight="min-content"
            flex={1}
          >
            {logo && (
              <Foo mx="auto" mb={5}>
                <Img fixed={logo.childImageSharp.fixed} />
              </Foo>
            )}

            <Dl>
              <Dt>Name</Dt>
              <Dd>{name}</Dd>
            </Dl>

            <Dl>
              <Dt>Url</Dt>
              <Dd>{url}</Dd>
            </Dl>

            <Dl>
              <Dt>Technologies</Dt>
              <Dd>
                <ul>
                  {technologies.map(technology => (
                    <li key={technology.id}>{technology.name}</li>
                  ))}
                </ul>
              </Dd>
            </Dl>

            <Flex justifyContent="space-between" mt="auto">
              <Action url="/work" name="Cancel" />
              <Action url={url} name="Launch" />
            </Flex>
          </Flex>
        </Window>
      </>
    </WorkBench>
  )
}

WorkTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default WorkTemplate

export const WorkTemplateQuery = graphql`
  query WorkTemplateQuery($slug: String!) {
    strapiWork(slug: { eq: $slug }) {
      name
      description
      url
      slug
      full
      free
      technologies {
        id
        name
      }
      datePublished
      dateModified
      logo {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
            width
            height
          }
        }
      }
      image {
        childImageSharp {
          fixed(width: 1200, height: 628) {
            src
          }
        }
      }
    }
  }
`
