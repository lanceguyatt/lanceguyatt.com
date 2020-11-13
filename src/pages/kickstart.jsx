import React from 'react';
import { Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import GlobalStyles from '../styles/global';
import { SEO } from '../components';
import KickStart from '../containers/KickStart';

const KickStartPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;
  return (
    <>
      <GlobalStyles />
      <SEO {...meta} url="/kickstart" image={meta.image.fixed.src} />
      <Styled.root>
        <KickStart />
      </Styled.root>
    </>
  );
};

KickStartPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default KickStartPage;

export const KickStartPageQuery = graphql`
  query kickStartPageQuery {
    contentfulPage(id: { eq: "0ccb3f50-06b6-5803-b5d9-41e7f57b0afa" }) {
      name
      meta {
        ...meta
      }
    }
  }
`;
