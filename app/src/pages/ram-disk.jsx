import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WorkBench from '../layouts/WorkBench'
import { SEO, Window } from '../components'
import { Box } from '../components/common'

const Wrapper = styled(Box).attrs({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})``

const RamDiskPage = ({
  data: {
    strapiPage: { name, description, slug, full },
  },
}) => (
  <WorkBench>
    <>
      <SEO title={name} desc={description} pathname={slug} />
      <Wrapper>
        <Window name={name} full={full} />
      </Wrapper>
    </>
  </WorkBench>
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
