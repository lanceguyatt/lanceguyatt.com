import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box } from 'theme-ui';

import { SEO } from '../components';
import GuruMeditation from '../containers/GuruMeditation';

const GuruMeditationPage = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;

  return (
    <>
      <SEO {...meta} url="/404" />
      <Box as="main">
        <GuruMeditation />
      </Box>
    </>
  );
};

GuruMeditationPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default GuruMeditationPage;

export const GuruMeditationPageQuery = graphql`
  query guruMeditationPageQuery {
    contentfulPage(id: { eq: "c11aa070-c9cc-549e-a7bb-e5111bdd6b0f" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`;
