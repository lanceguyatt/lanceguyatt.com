import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { kickstart } from '../themes';
import KickStart from '../containers/KickStart';
import { SEO } from '../components';

const KickStartPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;
  return (
    <ThemeProvider theme={kickstart}>
      <>
        <GlobalStyle />
        <SEO {...meta} url="/kickstart" image={meta.image.fixed.src} />
        <KickStart />
      </>
    </ThemeProvider>
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
