import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import WorkBench from '../layouts/WorkBench'
import { Work } from '../containers'
import { SEO, Window } from '../components'
import { Box, Flex, Action } from '../components/common'

import ap from '../images/ap.png'

const Foo = styled(Box).attrs({
  border: 4,
  p: 2,
})`
  border-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==)
    4 stretch;
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
  bg: 'orange',
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
  const {
    name,
    description,
    slug,
    url,
    technologies,
    datePublished,
  } = strapiWork
  return (
    <WorkBench>
      <>
        <SEO
          title={name}
          desc={description}
          pathname={`/work/${slug}`}
          article
          node={{
            name,
            description,
            datePublished,
          }}
        />
        <Work />
        <Window {...strapiWork} close="/work" level2>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            minHeight="min-content"
          >
            <Flex
              flexDirection={['column', null, 'row']}
              mx={[null, null, -2]}
              alignItems="flex-start"
            >
              <Foo flex={[null, 1]} mx={[null, null, 2]} mb={5} bg="lime">
                <Box is="img" src={ap} alt="" mx="auto" display="block" />
              </Foo>

              <Box flex={1} mx={[null, null, 2]} width={1}>
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
              </Box>
            </Flex>

            <Flex justifyContent="space-between">
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
    }
  }
`
