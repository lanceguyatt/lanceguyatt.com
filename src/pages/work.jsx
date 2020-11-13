import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import WorkBench from '../layouts/WorkBench';
// import { Work } from '../containers';
import { SEO } from '../components';

const WorkPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;
  return (
    <WorkBench>
      <>
        <SEO {...meta} url="/work" />
        {/* <Work active /> */}
      </>
    </WorkBench>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default WorkPage;

export const WorkPageQuery = graphql`
  query workPageQuery {
    contentfulPage(id: { eq: "d1db9bfe-b16b-5aad-936d-688a97c750dc" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`;
