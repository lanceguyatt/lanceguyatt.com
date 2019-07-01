import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import WorkBench from '../layouts/WorkBench'
import { Work } from '../containers'
import { Flex } from '../primitives'
import { SEO, Window, Dl, Dt, Dd, Action, Qux } from '../components'

const WorkTemplate = ({ data }) => {
  const { contentfulWork } = data
  const { meta, name, image, slug, url, technologies } = contentfulWork
  return (
    <WorkBench>
      <>
        <SEO {...meta} url={`/work/${slug}`} website node={contentfulWork} />
        <Window {...contentfulWork} close="/work" active level2 heading="h1">
          <Flex
            flexDirection="column"
            height="calc(100% - 2.2rem)"
            minHeight="min-content"
            flex={1}
          >
            {image && (
              <Qux mx="auto" mb={5} width="15.2rem">
                <Img fixed={image.fixed} />
              </Qux>
            )}

            <Dl mb={3}>
              <Dt width={1 / 3}>Name</Dt>
              <Dd width={2 / 3}>{name}</Dd>
            </Dl>

            <Dl mb={3}>
              <Dt width={1 / 3}>Url</Dt>
              <Dd width={2 / 3}>{url}</Dd>
            </Dl>

            <Dl>
              <Dt width={1 / 3}>Technologies</Dt>
              <Dd width={2 / 3}>
                <ul>
                  {technologies.map(technology => (
                    <li key={technology.id}>{technology.name}</li>
                  ))}
                </ul>
              </Dd>
            </Dl>

            <Flex justifyContent="space-between" mt="auto">
              <Action url="/work" name="Cancel" aria-label="Cancel" />
              <Action url={url} name="Launch" />
            </Flex>
          </Flex>
        </Window>
        <Work />
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
    contentfulWork(slug: { eq: $slug }) {
      meta {
        ...meta
      }
      name
      url
      slug
      image {
        fixed(width: 144) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      technologies {
        id
        name
      }
      dateModified: updatedAt
      datePublished
    }
  }
`
