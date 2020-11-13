import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { SEO } from '../components';
import KickStart from '../containers/KickStart';

const KickStartPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;
  return (
    <>
      <SEO {...meta} url="/kickstart" image={meta.image.fixed.src} />
      <KickStart />
    </>
  );
};

KickStartPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default KickStartPage;

export const KickStartPageQuery = graphql`
  query kickStartPageQuery {
    contentfulPage(contentful_id: { eq: "2BnXNmuFpBFmgEqeiEcK4m" }) {
      name
      meta {
        ...meta
      }
    }
  }
`;
