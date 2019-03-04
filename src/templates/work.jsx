import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import WorkBench from '../layouts/WorkBench'
import { WorkBench as WB, Work } from '../containers'
import { SEO, Window, Foo, Dl, Dt, Dd, Flex, Action } from '../components'

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
              <Foo mx="auto" mb={5} width="15.6rem">
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
          fixed(width: 144) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
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
