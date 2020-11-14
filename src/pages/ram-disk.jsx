import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import WorkBench from '../layouts/WorkBench';
import { SEO, Window } from '../components';

const RamDiskPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;
  return (
    <WorkBench>
      <>
        <SEO {...meta} url="/ram-disk" />
        <Window {...contentfulPage} level1 active />
      </>
    </WorkBench>
  );
};

RamDiskPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default RamDiskPage;

export const RamDiskPageQuery = graphql`
  query ramDiskPageQuery {
    contentfulPage(contentful_id: { eq: "5CxgcTlDWWc1saglTNbpH5" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`;
