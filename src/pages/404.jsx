import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box } from 'theme-ui';

import GlobalStyles from '../styles/global';
import GuruMeditation from '../containers/GuruMeditation';
import { SEO } from '../components';

const propTypes = {
  data: PropTypes.shape().isRequired,
};

const GuruMeditationPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;

  return (
    <>
      <SEO {...meta} url="/404" />
      <GlobalStyles />
      <Box as="main">
        <GuruMeditation />
      </Box>
    </>
  );
};

GuruMeditationPage.propTypes = propTypes;

export default GuruMeditationPage;

export const GuruMeditationPageQuery = graphql`
  query guruMeditationPageQuery {
    contentfulPage(contentful_id: { eq: "66TpcoOxvNvb8Jx3FgEVFQ" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`;
