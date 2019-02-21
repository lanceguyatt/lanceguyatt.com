import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, TitleBar, Window } from '../components'
import { Box } from '../components/common'

const Wrapper = styled(Box).attrs({
  position: 'absolute',
  top: '2.2rem',
  right: 0,
  bottom: 0,
  left: 0,
  bg: 'yellow',
})``

const RamDiskPage = ({
  data: {
    strapiPage: { name, description, slug, full },
  },
}) => (
  <Default>
    <>
      <SEO title={name} desc={description} pathname={slug} />
      <TitleBar />
      <WorkBench />
      <Wrapper>
        <Window name={name} full={full} />
      </Wrapper>
    </>
  </Default>
)

RamDiskPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default RamDiskPage

export const RamDiskPageQuery = graphql`
  query ramDiskageQuery {
    strapiPage(slug: { eq: "/ram-disk" }) {
      name
      description
      slug
      full
    }
  }
`
