import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, Window, About } from '../components'
import { Flex } from '../components/common'

const Wrapper = styled(Flex).attrs({
  position: 'absolute',
  top: [44, null, '50%'],
  right: [0, null, 'auto'],
  bottom: [0, null, 'auto'],
  left: [0, null, '50%'],
  width: [1, null, 1 / 2],
  height: ['calc(100% - 44px)', null, '50rem'],
})`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    transform: translate(-50%, -50%);
  }
`
const AboutPage = ({
  data: {
    strapiPage: { name, description, slug, full },
  },
}) => (
  <Default>
    <>
      <SEO title={name} desc={description} pathname={slug} />
      <WorkBench />
      <Wrapper>
        <Window name={name} close="/" full={full}>
          <About />
        </Window>
      </Wrapper>
    </>
  </Default>
)

AboutPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query aboutPageQuery {
    strapiPage(slug: { eq: "/about" }) {
      name
      description
      slug
      full
    }
  }
`
